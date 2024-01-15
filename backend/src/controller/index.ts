import { Express, Router } from 'express';
import { initializeServices } from '../service';
import { BitcoinController } from './bitcoin.controller';

export interface ControllerBase {
    readonly router: Router;
}

function initializeControllers(): ControllerBase[] {
    const { bitcoinService } = initializeServices();
    return [new BitcoinController(bitcoinService)];
}

export function initializeRoutes(app: Express) {
    const controllers = initializeControllers();
    controllers.forEach(controller => app.use('/', controller.router));
}
