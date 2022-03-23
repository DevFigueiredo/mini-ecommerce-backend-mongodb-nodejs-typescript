"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationSignEmailAndPasswordUseCase = void 0;
const missing_params_error_1 = require("../../../shared/errors/missing-params-error");
const unauthorized_1 = require("../../../shared/errors/unauthorized");
class AuthenticationSignEmailAndPasswordUseCase {
    constructor({ firebaseAuth }) {
        this.firebaseAuth = firebaseAuth;
    }
    async execute({ email, password }) {
        if (!email)
            throw new missing_params_error_1.MissingParamError('email');
        if (!password)
            throw new missing_params_error_1.MissingParamError('password');
        try {
            const authenticated = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
            const token = await authenticated.user.getIdToken();
            const refreshToken = authenticated.user.refreshToken;
            return { token, refreshToken, expiresIn: '1h' };
        }
        catch (error) {
            throw new unauthorized_1.Unauthorized('User or password is invalid!');
        }
    }
}
exports.AuthenticationSignEmailAndPasswordUseCase = AuthenticationSignEmailAndPasswordUseCase;
