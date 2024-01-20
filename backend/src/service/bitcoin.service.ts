import { ClientWrapper } from './bitcoin.client';

export class BitcoinService {
    readonly #client;

    constructor() {
        this.#client = ClientWrapper;
    }

    public getBlockchainInfo = async () => {
        const blockchainInfo = await this.#client.getBlockchainInfo();
        return { ...blockchainInfo, node: process.env.BLOCKCHAIN_HOST };
    }

    public getLatestBlocks = async () => {
        const latestBlockHeight = await this.#client.getBlockCount();
        const arrayOfLength10 = Array.from({ length: 10 }, (_, i) => i + 1);
        const latestBlockResponses = await Promise.all(arrayOfLength10.map(async (i) => await this.#client.getBlockStats(latestBlockHeight - i)));
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
    }

    public getBlockByHash = async (hash: string) => {
        return await this.#client.getBlock(hash);
    }

    public getBlockHashByHeight = async (height: number) => {
        return await this.#client.getBlockHash(height);
    }

    public getBlockByHeight = async (height: number) => {
        const hash = await this.getBlockHashByHeight(height);
        return await this.getBlockByHash(hash);
    }

    public getTransactionById = async (hash: string) => {
        const rawTx = await this.#client.getRawTransaction(hash, true);
        const decodedTx = await this.#client.decodeRawTransaction(rawTx.hex);
        const fee = await this.calculateTransactionFee(decodedTx);
        return { ...decodedTx, fee, blockhash: rawTx.blockhash, confirmations: rawTx.confirmations };
    }

    public getLatestTransactions = async () => {
        const latestBlockHash = await this.#client.getBlockCount();
        const latestBlock = await this.#client.getBlockByHash(await this.#client.getBlockHash(latestBlockHash));
        const latestTransactions = await Promise.all(latestBlock.tx.map(async (txId) => await this.getTransactionById(txId)));
        return latestTransactions;
    }

    private calculateTransactionFee = async (transaction) => {
        const voutSum = transaction.vout.map(vout => vout.value ?? 0).reduce((acc, amount) => acc + amount, 0);

        const inputTxs = await Promise.all(transaction.vin.map(async (v) => await this.getTxValue(v.txid)));
        const vinSum = inputTxs.reduce((prev, next) => prev + next, 0);

        return vinSum - voutSum;
    }

    private getTxValue = async (txId: string) => {
        const inputTransactionRaw = await this.#client.getRawTransaction(txId);
        const inputTransactionDecoded = await this.#client.decodeRawTransaction(inputTransactionRaw);
        const vOutSum = inputTransactionDecoded.vout.map(v => v.value ?? 0).reduce((acc, next) => acc + next, 0);
        return vOutSum;
    }
}

