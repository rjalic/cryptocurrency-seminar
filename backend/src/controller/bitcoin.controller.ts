import { ControllerBase } from './index';
import { Request, Response, NextFunction, Router } from 'express';
import { BitcoinService } from '../service/bitcoin.service';

export class BitcoinController implements ControllerBase {
    readonly #path = '/1/bitcoin';
    readonly #router = Router();
    readonly #bitcoinService: BitcoinService;

    constructor(bitcoinService: BitcoinService) {
        this.#bitcoinService = bitcoinService;
        this.initializeRoutes();
    }

    public get router() {
        return this.#router;
    }

    public initializeRoutes() {
        this.#router.get(`${this.#path}/network-info`, this.getBlockchainInfo);
        this.#router.get(`${this.#path}/blocks/latest`, this.getLatestBlocks);
        this.#router.get(`${this.#path}/blocks/hash/:hash`, this.getBlockByHash);
        this.#router.get(`${this.#path}/blocks/height/:height`, this.getBlockByHeight);
        this.#router.get(`${this.#path}/transactions/latest`, this.getLatestTransactions);
        this.#router.get(`${this.#path}/transactions/:id`, this.getTransactionById);
    }

    private getBlockchainInfo = async (_: Request, response: Response, next: NextFunction) => {
        try {
            const blockchainInfo = await this.#bitcoinService.getBlockchainInfo();
            return response.json(blockchainInfo);
        } catch (err) {
            next(err);
        }
    };

    private getLatestBlocks = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const latestBlockHash = await this.#bitcoinService.getLatestBlocks();
            return response.json(latestBlockHash);
        } catch (err) {
            next(err);
        }
    };

    private getBlockByHash = async (request: Request, response: Response, next: NextFunction) => {
        const { hash } = request.params;
        try {
            const block = await this.#bitcoinService.getBlockByHash(hash);
            return response.json(block);
        } catch (err) {
            next(err);
        }
    };

    private getBlockByHeight = async (request: Request, response: Response, next: NextFunction) => {
        const { height } = request.params;
        try {
            const block = await this.#bitcoinService.getBlockByHeight(+height);
            return response.json(block);
        } catch (err) {
            next(err);
        }
    };

    private getLatestTransactions = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const latestTransactions = await this.#bitcoinService.getLatestTransactions();
            return response.json(latestTransactions);
        } catch (err) {
            next(err);
        }
    };

    private getTransactionById = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        try {
            const transaction = await this.#bitcoinService.getTransactionById(id);
            return response.json(transaction);
        } catch (err) {
            next(err);
        }
    };

}