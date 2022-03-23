"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_schema_1 = require("../../../../../shared/infra/database/mongodb/schemas/product-schema");
class ProductRepository {
    async find(params) {
        return await product_schema_1.ProductModel.find(params.where);
    }
    async update(entity, params) {
        void await product_schema_1.ProductModel.updateOne(params.where, entity);
    }
    async delete(params) {
        void await product_schema_1.ProductModel.deleteOne(params.where);
    }
    async save(entity) {
        const product = new product_schema_1.ProductModel(entity);
        await product.save();
    }
}
exports.ProductRepository = ProductRepository;
