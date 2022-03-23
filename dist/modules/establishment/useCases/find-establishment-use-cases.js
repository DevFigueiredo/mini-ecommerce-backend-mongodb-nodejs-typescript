"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEstablishmentsUseCase = void 0;
class FindEstablishmentsUseCase {
    constructor({ establishmentRepository }) {
        this.establishmentRepository = establishmentRepository;
    }
    async execute({ params }) {
        const establishments = await this.establishmentRepository.find({ where: params });
        return establishments;
    }
}
exports.FindEstablishmentsUseCase = FindEstablishmentsUseCase;
