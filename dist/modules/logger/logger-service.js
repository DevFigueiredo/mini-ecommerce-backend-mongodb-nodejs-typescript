"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() {
        this.logger = console;
    }
    debug(message) {
        this.logger.debug(message);
    }
    info(message, meta) {
        meta ? this.logger.info(message, meta) : this.logger.info(message);
    }
    warn(message, meta) {
        meta ? this.logger.warn(message, meta) : this.logger.warn(message);
    }
    error(message, meta) {
        meta ? this.logger.error(message, meta) : this.logger.error(message);
    }
}
exports.Logger = Logger;
