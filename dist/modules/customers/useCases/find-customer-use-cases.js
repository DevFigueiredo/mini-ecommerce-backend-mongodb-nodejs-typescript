"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomersUseCase = void 0;
class FindCustomersUseCase {
    constructor({ customerRepository }) {
        this.customerRepository = customerRepository;
    }
    async execute({ params }) {
        const Customers = await this.customerRepository.find({ where: params });
        return Customers;
    }
}
exports.FindCustomersUseCase = FindCustomersUseCase;
