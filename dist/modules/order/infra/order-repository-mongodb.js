"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const order_schema_1 = require("../../../shared/infra/database/mongodb/schemas/order-schema");
class OrderRepository {
    async addProduct(entity, params) {
        void await order_schema_1.OrderModel.findOneAndUpdate(params.where, {
            $addToSet: {
                items: entity
            }
        }, { upsert: true });
    }
    async listProducts(params) {
        const order = await order_schema_1.OrderModel.findOne(params.where);
        return order;
    }
    async flushProducts(params) {
        void await order_schema_1.OrderModel.findOneAndUpdate(params.where, {
            $unset: {
                items: ''
            }
        });
    }
    async removeProduct(params) {
        void await order_schema_1.OrderModel.findOneAndUpdate({ customerId: params.where.customerId, status: params.where.status }, {
            $pull: {
                items: { productId: params.where.productId }
            }
        });
    }
    async find(params) {
        return await order_schema_1.OrderModel.find(params.where);
    }
    async update(entity, params) {
        void await order_schema_1.OrderModel.updateOne(params.where, entity);
    }
    async delete(params) {
        void await order_schema_1.OrderModel.deleteOne(params.where);
    }
    async save(entity) {
        const establishment = new order_schema_1.OrderModel(entity);
        await establishment.save();
    }
}
exports.OrderRepository = OrderRepository;
