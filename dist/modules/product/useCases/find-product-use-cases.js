"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductUseCase = void 0;
class FindProductUseCase {
    constructor({ productRepository }) {
        this.productRepository = productRepository;
    }
    async execute({ params }) {
        const Product = await this.productRepository.find({ where: params });
        return Product;
    }
}
exports.FindProductUseCase = FindProductUseCase;
