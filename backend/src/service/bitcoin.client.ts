const Client = require('bitcoin-core');

const options = {
    host: 'node_host',
    port: 1234,
    username: 'uname',
    password: 'pwd',
    "accept": "application/json",
}

interface ClientOptions {
    host: string;
    port: number;
    username: string;
    password: string;
}

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
            ClientSingleton.#client = new Client(options);
            console.info('Bitcoin client initialized.');
        } catch (err) {
            console.error('Error while initializing Bitcoin client.', err);
            process.exit(1);
        }
    }
}

export const ClientWrapper = ClientSingleton.client;
