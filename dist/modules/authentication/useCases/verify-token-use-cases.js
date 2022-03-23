"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationVerifyTokenUseCase = void 0;
class AuthenticationVerifyTokenUseCase {
    constructor({ firebaseAdmin }) {
        this.firebaseAdmin = firebaseAdmin.auth();
    }
    async execute({ token }) {
        const tokenValidate = await this.firebaseAdmin.verifyIdToken(token);
        return { uid: tokenValidate.uid, email: tokenValidate.email };
    }
}
exports.AuthenticationVerifyTokenUseCase = AuthenticationVerifyTokenUseCase;
