import { BitcoinService } from './bitcoin.service';

export function initializeServices() {
    const bitcoinService = new BitcoinService();
    return { bitcoinService };
}