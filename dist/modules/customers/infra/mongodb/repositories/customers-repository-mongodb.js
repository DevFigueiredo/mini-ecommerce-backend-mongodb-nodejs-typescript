"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const customer_schema_1 = require("../../../../../shared/infra/database/mongodb/schemas/customer-schema");
class CustomerRepository {
    async find(params) {
        return await customer_schema_1.CustomerModel.find(params.where);
    }
    async update(entity, params) {
        void await customer_schema_1.CustomerModel.updateOne(params.where, entity);
    }
    async delete(params) {
        void await customer_schema_1.CustomerModel.deleteOne(params.where);
    }
    async save(entity) {
        const establishment = new customer_schema_1.CustomerModel(entity);
        await establishment.save();
    }
}
exports.CustomerRepository = CustomerRepository;
