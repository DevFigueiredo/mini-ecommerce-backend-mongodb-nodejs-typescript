"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdProductUseCase = void 0;
const missing_params_error_1 = require("../../../shared/errors/missing-params-error");
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class FindByIdProductUseCase {
    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
    async execute({ params }) {
        if (!(params === null || params === void 0 ? void 0 : params._id)) {
            throw new missing_params_error_1.MissingParamError('id');
        }
        const [product] = await this.productRepository.find({ where: { _id: params._id } });
        if (!product) {
            throw new not_found_error_1.NotFoundError();
        }
        return product;
    }
}
exports.FindByIdProductUseCase = FindByIdProductUseCase;
