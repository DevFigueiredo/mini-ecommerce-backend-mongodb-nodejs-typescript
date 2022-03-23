"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationDeleteUseCase = void 0;
const invalid_param_error_1 = require("../../../shared/errors/invalid-param-error");
class AuthenticationDeleteUseCase {
    constructor({ firebaseAdmin }) {
        this.firebaseAdmin = firebaseAdmin.auth();
    }
    async execute({ params }) {
        try {
            const firebaseUser = await this.firebaseAdmin.deleteUser(params.uid);
            return firebaseUser;
        }
        catch (error) {
            if (error.code === 'auth/email-already-exists') {
                throw new invalid_param_error_1.InvalidParamError('Email already exists.');
            }
            throw error;
        }
    }
}
exports.AuthenticationDeleteUseCase = AuthenticationDeleteUseCase;
