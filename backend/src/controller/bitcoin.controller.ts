import { ControllerBase } from './index';
import { Router } from 'express';
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
        this.#router.get(`${this.#path}/blocks/hash/:hash`, this.getBlockByHash);
        this.#router.get(`${this.#path}/blocks/height/:height`, this.getBlockByHeight);
        this.#router.get(`${this.#path}/transactions/:id`, this.getTransactionById);
    }

    private getBlockchainInfo = async (_, response, next) => {
        try {
            const blockchainInfo = await this.#bitcoinService.getBlockchainInfo();
            return response.json(blockchainInfo);
        } catch (err) {
            next(err);
        }
    };

    private getBlockByHash = async (request, response, next) => {
        const { hash } = request.params;
        try {
            const block = await this.#bitcoinService.getBlockByHash(hash);
            return response.json(block);
        } catch (err) {
            next(err);
        }
    };

    private getBlockByHeight = async (request, response, next) => {
        const { height } = request.params;
        try {
            const block = await this.#bitcoinService.getBlockByHeight(+height);
            return response.json(block);
        } catch (err) {
            next(err);
        }
    };

    private getTransactionById = async (request, response, next) => {
        const { id } = request.params;
        try {
            const transaction = await this.#bitcoinService.getTransactionById(id);
            return response.json(transaction);
        } catch (err) {
            next(err);
        }
    };

}