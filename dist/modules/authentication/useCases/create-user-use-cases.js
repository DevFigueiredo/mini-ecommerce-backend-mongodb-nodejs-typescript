"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationCreateUseCase = void 0;
const invalid_param_error_1 = require("../../../shared/errors/invalid-param-error");
class AuthenticationCreateUseCase {
    constructor({ firebaseAdmin }) {
        this.firebaseAdmin = firebaseAdmin.auth();
    }
    async execute({ entity }) {
        try {
            const firebaseUser = await this.firebaseAdmin.createUser({
                uid: entity.uid,
                email: entity.email,
                password: entity.password,
                displayName: entity.displayName,
                emailVerified: true
            });
            return firebaseUser.uid;
        }
        catch (error) {
            if (error.code === 'auth/email-already-exists') {
                throw new invalid_param_error_1.InvalidParamError('Email already exists.');
            }
            throw error;
        }
    }
}
exports.AuthenticationCreateUseCase = AuthenticationCreateUseCase;
