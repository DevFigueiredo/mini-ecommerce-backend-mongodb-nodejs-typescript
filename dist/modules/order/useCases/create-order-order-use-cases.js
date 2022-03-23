"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
const order_status_enum_1 = require("../../../shared/enums/order-status-enum");
const invalid_param_error_1 = require("../../../shared/errors/invalid-param-error");
const generateUUID_1 = require("../../../shared/helpers/generateUUID");
class CreateOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ entity }) {
        const [orderExists] = await this.orderRepository.find({ where: { customerId: entity.customerId, status: order_status_enum_1.OrderStatus.Bag } });
        if (orderExists)
            throw new invalid_param_error_1.InvalidParamError('Already exists order in a bag');
        entity._id = (0, generateUUID_1.generateUUID)();
        await this.orderRepository.save(Object.assign(Object.assign({}, entity), { status: order_status_enum_1.OrderStatus.Bag }));
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
