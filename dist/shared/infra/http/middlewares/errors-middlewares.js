"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsMiddleware = void 0;
const forbidden_error_1 = require("../../../errors/forbidden-error");
const invalid_param_error_1 = require("../../../errors/invalid-param-error");
const not_found_error_1 = require("../../../errors/not-found-error");
const http_status_helper_1 = require("../../../enums/http-status-helper");
const missing_params_error_1 = require("../../../errors/missing-params-error");
const unauthorized_1 = require("../../../errors/unauthorized");
async function errorsMiddleware(error, request, response, _) {
    if (error instanceof invalid_param_error_1.InvalidParamError) {
        return response.status(http_status_helper_1.HttpStatusHelper.badRequest).json({ error: error.message });
    }
    if (error instanceof missing_params_error_1.MissingParamError) {
        return response.status(http_status_helper_1.HttpStatusHelper.badRequest).json({ error: error.message });
    }
    if (error instanceof forbidden_error_1.ForbiddenError) {
        return response.status(http_status_helper_1.HttpStatusHelper.Forbidden).json({ error: error.message });
    }
    if (error instanceof not_found_error_1.NotFoundError) {
        return response.status(http_status_helper_1.HttpStatusHelper.NotFound).json({ error: error.message });
    }
    if (error instanceof unauthorized_1.Unauthorized) {
        return response.status(http_status_helper_1.HttpStatusHelper.Unauthorized).json({ error: error.message });
    }
    console.error(error);
    return response.status(http_status_helper_1.HttpStatusHelper.InternalServerError).json({ error: 'Ocorreu um erro interno' });
}
exports.errorsMiddleware = errorsMiddleware;
