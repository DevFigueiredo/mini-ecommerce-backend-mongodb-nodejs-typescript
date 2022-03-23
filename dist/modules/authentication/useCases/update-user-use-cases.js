"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUpdateUseCase = void 0;
const invalid_param_error_1 = require("../../../shared/errors/invalid-param-error");
class AuthenticationUpdateUseCase {
    constructor({ firebaseAdmin }) {
        this.firebaseAdmin = firebaseAdmin.auth();
    }
    async execute({ entity, params }) {
        try {
            await this.firebaseAdmin.updateUser(params.uid, entity);
        }
        catch (error) {
            if (error.code === 'auth/email-already-exists') {
                throw new invalid_param_error_1.InvalidParamError('Email already exists.');
            }
            throw error;
        }
    }
}
exports.AuthenticationUpdateUseCase = AuthenticationUpdateUseCase;
