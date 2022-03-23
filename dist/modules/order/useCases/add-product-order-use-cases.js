"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductOrderUseCase = void 0;
const http_status_helper_1 = require("../../../shared/enums/http-status-helper");
const order_status_enum_1 = require("../../../shared/enums/order-status-enum");
const not_found_error_1 = require("../../../shared/errors/not-found-error");
const api_1 = __importDefault(require("../../../shared/utils/api"));
class AddProductOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ entity, params }) {
        const { description, _id: productId, establishmentId, title, price } = await this.getProduct(entity.productId);
        const { name: establishmentName } = await this.getEstablishment(establishmentId);
        await this.orderRepository.removeProduct({ where: { customerId: params.customerId, productId: entity.productId, status: order_status_enum_1.OrderStatus.Bag } });
        await this.orderRepository.addProduct({ description, title, establishmentId, quantity: entity.quantity, productId, price, establishmentName }, { where: Object.assign({}, params) });
    }
    async getProduct(productId) {
        var _a;
        try {
            const { data: product } = await api_1.default.get(`/product/${productId}`);
            return product;
        }
        catch (error) {
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === http_status_helper_1.HttpStatusHelper.NotFound)
                throw new not_found_error_1.NotFoundError('Product not found');
            throw error;
        }
    }
    async getEstablishment(establishmentId) {
        var _a;
        try {
            const { data: establishment } = await api_1.default.get(`/establishment/${establishmentId}`);
            return establishment;
        }
        catch (error) {
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === http_status_helper_1.HttpStatusHelper.NotFound)
                throw new not_found_error_1.NotFoundError('Establishment not found');
            throw error;
        }
    }
}
exports.AddProductOrderUseCase = AddProductOrderUseCase;
