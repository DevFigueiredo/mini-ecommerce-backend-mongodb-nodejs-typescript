"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEstablishmentsUseCase = void 0;
class DeleteEstablishmentsUseCase {
    constructor({ establishmentRepository }) {
        this.establishmentRepository = establishmentRepository;
    }
    async execute({ params }) {
        await this.establishmentRepository.delete({ where: { _id: params === null || params === void 0 ? void 0 : params._id } });
    }
}
exports.DeleteEstablishmentsUseCase = DeleteEstablishmentsUseCase;
