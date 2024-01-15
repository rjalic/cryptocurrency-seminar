const Client = require('bitcoin-core');
require('dotenv').config();

class ClientSingleton {
    static #client;

    static get client() {
        if (ClientSingleton.#client) {
            return ClientSingleton.#client;
        }
        ClientSingleton.#initializeClient();
        return ClientSingleton.#client;
    }

    static #initializeClient() {
        try {
            ClientSingleton.#client = new Client({
                host: process.env.BLOCKCHAIN_HOST,
                port: process.env.BLOCKCHAIN_PORT,
                username: process.env.BLOCKCHAIN_USER,
                password: process.env.BLOCKCHAIN_PASSWORD,
                "accept": "application/json",
            });
            console.info('Bitcoin client initialized.');
        } catch (err) {
            console.error('Error while initializing Bitcoin client.', err);
            process.exit(1);
        }
    }
}

export const ClientWrapper = ClientSingleton.client;
