"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const http_status_helper_1 = require("../../../shared/enums/http-status-helper");
const missing_params_error_1 = require("../../../shared/errors/missing-params-error");
const not_found_error_1 = require("../../../shared/errors/not-found-error");
const api_1 = __importDefault(require("../../../shared/utils/api"));
class UpdateProductUseCase {
    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
    async execute({ entity, params }) {
        if (!params._id) {
            throw new missing_params_error_1.MissingParamError('id');
        }
        await this.getEstablishment(entity.establishmentId);
        await this.productRepository.update(entity, { where: params });
    }
    async getEstablishment(establishmentId) {
        try {
            const { data: establishment } = await api_1.default.get(`/establishment/${establishmentId}`);
            return establishment;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.response.status) === http_status_helper_1.HttpStatusHelper.NotFound)
                throw new not_found_error_1.NotFoundError('Establishment not found');
            throw error;
        }
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
