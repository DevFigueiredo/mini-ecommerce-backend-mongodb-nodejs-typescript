"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdCustomerUseCase = void 0;
const missing_params_error_1 = require("../../../shared/errors/missing-params-error");
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class FindByIdCustomerUseCase {
    constructor({ customerRepository }) {
        this.customerRepository = customerRepository;
    }
    async execute({ params }) {
        if (!(params === null || params === void 0 ? void 0 : params._id)) {
            throw new missing_params_error_1.MissingParamError('id');
        }
        const [customer] = await this.customerRepository.find({ where: { _id: params._id } });
        if (!customer) {
            throw new not_found_error_1.NotFoundError();
        }
        return customer;
    }
}
exports.FindByIdCustomerUseCase = FindByIdCustomerUseCase;
