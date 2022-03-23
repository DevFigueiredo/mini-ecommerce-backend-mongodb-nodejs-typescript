"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentRepository = void 0;
const establishment_schema_1 = require("../../../../../shared/infra/database/mongodb/schemas/establishment-schema");
class EstablishmentRepository {
    async find(params) {
        return await establishment_schema_1.EstablishmentModel.find(params.where);
    }
    async update(entity, params) {
        void await establishment_schema_1.EstablishmentModel.updateOne(params.where, entity);
    }
    async delete(params) {
        void await establishment_schema_1.EstablishmentModel.deleteOne(params.where);
    }
    async save(entity) {
        const establishment = new establishment_schema_1.EstablishmentModel(entity);
        await establishment.save();
    }
}
exports.EstablishmentRepository = EstablishmentRepository;
