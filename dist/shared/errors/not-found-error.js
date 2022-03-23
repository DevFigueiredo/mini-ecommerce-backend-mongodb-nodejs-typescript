"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(message) {
        super(message || 'No results were found');
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
