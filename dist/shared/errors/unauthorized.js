"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = void 0;
class Unauthorized extends Error {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized';
    }
}
exports.Unauthorized = Unauthorized;
