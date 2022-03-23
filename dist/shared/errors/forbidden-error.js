"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
class ForbiddenError extends Error {
    constructor(paramName) {
        super('You are not allowed to do this');
        this.name = 'ForbiddenError';
    }
}
exports.ForbiddenError = ForbiddenError;
