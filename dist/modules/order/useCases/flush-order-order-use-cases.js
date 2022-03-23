"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlushOrderUseCase = void 0;
const order_status_enum_1 = require("../../../shared/enums/order-status-enum");
class FlushOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ params }) {
        await this.orderRepository.flushProducts({ where: Object.assign(Object.assign({}, params), { status: order_status_enum_1.OrderStatus.Bag }) });
    }
}
exports.FlushOrderUseCase = FlushOrderUseCase;
