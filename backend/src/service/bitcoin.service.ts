import { ClientWrapper } from './bitcoin.client';

export class BitcoinService {
    readonly #client;

    constructor() {
        this.#client = ClientWrapper;
    }

    public getBlockchainInfo = async () => {
        const blockchainInfo = await this.#client.getBlockchainInfo();
        return { ...blockchainInfo, node: process.env.BLOCKCHAIN_HOST };
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
        const rawTx = await this.#client.getRawTransaction(hash, 2);
        const decodedTx = await this.#client.decodeRawTransaction(rawTx.hex);
        return { ...decodedTx, fee: rawTx.fee, blockhash: rawTx.blockhash, confirmations: rawTx.confirmations };
    };

    public getLatestTransactions = async () => {
        const latestBlockHeight = await this.#client.getBlockCount();
        const latestBlock = await this.getBlockByHeight(latestBlockHeight);
        const last10TxIds = latestBlock.tx.slice(-10).reverse();
        const latestTransactions = await Promise.all(last10TxIds.map(async (txId) => await this.getTransactionById(txId)));
        return latestTransactions.map((tx) => {
            return {
                txId: tx.txid,
                blockHash: tx.blockhash,
                confirmations: tx.confirmations,
                size: tx.size,
                vins: tx.vin.length,
                vouts: tx.vout.length,
                totalOut: this.calculateTotalOut(tx),
                totalFee: tx.fee,
            };
        });
    };

    private calculateTotalOut = (transaction) => {
        const result = transaction.vout.map(vout => vout.value ? +vout.value : 0).reduce((acc, amount) => acc + amount, 0);
        return +result.toFixed(8);
    };
}

