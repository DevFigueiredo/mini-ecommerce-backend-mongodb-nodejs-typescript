"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProductOrderUseCase = void 0;
const order_status_enum_1 = require("../../../shared/enums/order-status-enum");
class RemoveProductOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ params }) {
        await this.orderRepository.removeProduct({ where: { customerId: params.customerId, productId: params.productId, status: order_status_enum_1.OrderStatus.Bag } });
    }
}
exports.RemoveProductOrderUseCase = RemoveProductOrderUseCase;
