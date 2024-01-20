import { ClientWrapper } from './bitcoin.client';

export class BitcoinService {
    readonly #client;

    constructor() {
        this.#client = ClientWrapper;
    }

    public getBlockchainInfo = async () => {
        const [blockchainInfo, rawMempool] = await Promise.all([await this.#client.getBlockchainInfo(), await this.#client.getRawMempool()]);
        return {
            node: process.env.BLOCKCHAIN_HOST,
            chain: blockchainInfo.chain,
            blocks: blockchainInfo.blocks,
            headers: blockchainInfo.headers,
            mempoolSize: rawMempool.length,
        };
    };

    public getLatestBlocks = async () => {
        const latestBlockHeight = await this.#client.getBlockCount();
        const arrayOfLength10 = Array.from({ length: 10 }, (_, i) => i + 1);
        const latestBlockResponses = await Promise.all(arrayOfLength10.map(async (i) => await this.#client.getBlockStats(latestBlockHeight + 1 - i)));
        return latestBlockResponses.map((block) => {
            return {
                height: block.height,
                hash: block.blockhash,
                timestamp: block.time,
                txs: block.txs,
                size: block.total_size,
                totalOuts: Number(`${block.total_out}e-8`),
                totalFees: Number(`${block.totalfee}e-8`),
            };
        });
    };

    public getBlockByHash = async (hash: string) => {
        return await this.#client.getBlock(hash);
    };

    public getBlockHashByHeight = async (height: number) => {
        return await this.#client.getBlockHash(height);
    };

    public getBlockByHeight = async (height: number) => {
        const hash = await this.getBlockHashByHeight(height);
        return await this.getBlockByHash(hash);
    };

    public getTransactionById = async (hash: string) => {
        const rawTx = await this.#client.getRawTransaction(hash, 3);
        console.log(rawTx);
        const decodedTx = await this.#client.decodeRawTransaction(rawTx.hex);
        return {
            txId: decodedTx.txid,
            blockHash: rawTx.blockhash,
            confirmations: rawTx.confirmations,
            size: decodedTx.size,
            vSize: decodedTx.vsize,
            fee: rawTx.fee,
            vins: this.getVins(rawTx.vin),
            vouts: this.getVouts(rawTx.vout),
            version: decodedTx.version,
        };
    };

    private getVins = (vins) => {
        return vins.map(vin => ({
            address: vin.prevout.scriptPubKey.address,
            amount: vin.prevout.value,
        }));
    }

    private getVouts = (vouts) => {
        return vouts.map(vout => ({
            address: vout.scriptPubKey.address ?? 'Null Data Transaction',
            amount: vout.value,
        }));
    }

    public getLatestTransactions = async () => {
        const latestBlockHeight = await this.#client.getBlockCount();
        const latestBlock = await this.getBlockByHeight(latestBlockHeight);
        const last10TxIds = latestBlock.tx.slice(-10).reverse();
        const latestTransactions = await Promise.all(last10TxIds.map(async (txId) => await this.getTransactionById(txId)));
        return latestTransactions.map((tx) => {
            return {
                txId: tx.txId,
                blockHash: tx.blockHash,
                confirmations: tx.confirmations,
                size: tx.size,
                vins: tx.vins.length,
                vouts: tx.vouts.length,
                totalIn: this.calculateTotalIn(tx),
                totalOut: this.calculateTotalOut(tx),
                fee: tx.fee,
            };
        });
    };

    private calculateTotalIn = (transaction) => {
        const result = transaction.vins.reduce((acc, vout) => acc + vout.amount, 0);
        return +result.toFixed(8);
    };

    private calculateTotalOut = (transaction) => {
        const result = transaction.vouts.reduce((acc, vout) => acc + vout.amount, 0);
        return +result.toFixed(8);
    };
}

