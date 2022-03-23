"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticatedMiddleware = void 0;
const container_1 = require("../../../container");
const http_status_helper_1 = require("../../../enums/http-status-helper");
async function ensureAuthenticatedMiddleware(request, response, next) {
    try {
        const AuthToken = request.headers.authorization;
        const authenticationVerifyTokenUseCase = container_1.container.resolve('authenticationVerifyTokenUseCase');
        if (!AuthToken) {
            return response.status(http_status_helper_1.HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' });
        }
        const [bearer, token] = AuthToken.split(' ');
        if ((bearer !== 'Bearer') || !token)
            return response.status(http_status_helper_1.HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' });
        const tokenValidate = await authenticationVerifyTokenUseCase.execute({ token: token });
        request.customerId = tokenValidate.uid;
        next();
    }
    catch (error) {
        if (error.code === 'auth/id-token-expired') {
            return response.status(http_status_helper_1.HttpStatusHelper.Unauthorized).json({ error: 'Expired Token.' });
        }
        if (error.code === 'auth/argument-error') {
            return response.status(http_status_helper_1.HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' });
        }
        throw error;
    }
}
exports.ensureAuthenticatedMiddleware = ensureAuthenticatedMiddleware;
