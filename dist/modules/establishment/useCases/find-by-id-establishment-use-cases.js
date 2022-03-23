"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdEstablishmentUseCase = void 0;
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class FindByIdEstablishmentUseCase {
    constructor({ establishmentRepository }) {
        this.establishmentRepository = establishmentRepository;
    }
    async execute({ params }) {
        if (!(params === null || params === void 0 ? void 0 : params._id)) {
            throw new not_found_error_1.NotFoundError('id not found in params');
        }
        const [establishment] = await this.establishmentRepository.find({ where: { _id: params._id } });
        if (!establishment) {
            throw new not_found_error_1.NotFoundError('establishment not found');
        }
        return establishment;
    }
}
exports.FindByIdEstablishmentUseCase = FindByIdEstablishmentUseCase;
