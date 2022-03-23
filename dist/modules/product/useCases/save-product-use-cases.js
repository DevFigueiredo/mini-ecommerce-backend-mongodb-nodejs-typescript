"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveProductUseCase = void 0;
const generateUUID_1 = require("../../../shared/helpers/generateUUID");
const api_1 = __importDefault(require("../../../shared/utils/api"));
const not_found_error_1 = require("../../../shared/errors/not-found-error");
const http_status_helper_1 = require("../../../shared/enums/http-status-helper");
class SaveProductUseCase {
    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
    async execute({ entity }) {
        entity._id = (0, generateUUID_1.generateUUID)();
        await this.getEstablishment(entity.establishmentId);
        await this.productRepository.save(entity);
        return entity._id;
    }
    async getEstablishment(establishmentId) {
        try {
            const { data: establishment } = await api_1.default.get(`/establishment/${establishmentId}`);
            return establishment;
        }
        catch (error) {
            if (error.response.status === http_status_helper_1.HttpStatusHelper.NotFound)
                throw new not_found_error_1.NotFoundError('Establishment not found');
            throw error;
        }
    }
}
exports.SaveProductUseCase = SaveProductUseCase;
