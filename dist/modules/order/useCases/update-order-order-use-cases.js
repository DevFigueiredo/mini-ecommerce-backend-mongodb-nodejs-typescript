"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderUseCase = void 0;
const invalid_param_error_1 = require("../../../shared/errors/invalid-param-error");
class UpdateOrderUseCase {
    constructor({ orderRepository }) {
        this.orderRepository = orderRepository;
    }
    async execute({ entity, params }) {
        const [orderExists] = await this.orderRepository.find({ where: { _id: params._id } });
        if (!orderExists)
            throw new invalid_param_error_1.InvalidParamError('Order not exists');
        await this.orderRepository.update(entity, { where: { _id: params._id } });
    }
}
exports.UpdateOrderUseCase = UpdateOrderUseCase;
