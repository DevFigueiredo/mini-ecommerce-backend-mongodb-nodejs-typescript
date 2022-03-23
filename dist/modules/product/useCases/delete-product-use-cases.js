"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUseCase = void 0;
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class DeleteProductUseCase {
    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
    async execute({ params }) {
        const [product] = await this.productRepository.find({ where: { _id: params._id } });
        if (!product)
            throw new not_found_error_1.NotFoundError();
        await this.productRepository.delete({ where: { _id: params === null || params === void 0 ? void 0 : params._id } });
    }
}
exports.DeleteProductUseCase = DeleteProductUseCase;
