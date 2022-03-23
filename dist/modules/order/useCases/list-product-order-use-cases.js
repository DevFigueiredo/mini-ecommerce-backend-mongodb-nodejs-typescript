"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrderUseCase = void 0;
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class ListOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ params }) {
        const list = await this.orderRepository.listProducts({ where: Object.assign({}, params) });
        if (!list) {
            throw new not_found_error_1.NotFoundError();
        }
        return this.formatResponse(list);
    }
    formatResponse(order) {
        const totalPrice = order.items.reduce((prev, current) => prev + current.price * current.quantity, 0);
        return {
            _id: order._id,
            customerId: order.customerId,
            status: order.status,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            totalPrice,
            items: order.items
        };
    }
}
exports.ListOrderUseCase = ListOrderUseCase;
