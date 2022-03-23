"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomersUseCase = void 0;
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class DeleteCustomersUseCase {
    constructor({ customerRepository, authenticationDeleteUseCase }) {
        this.authenticationDeleteUseCase = authenticationDeleteUseCase;
        this.customerRepository = customerRepository;
    }
    async execute({ params }) {
        const [customer] = await this.customerRepository.find({ where: { _id: params._id } });
        if (!customer)
            throw new not_found_error_1.NotFoundError();
        await this.authenticationDeleteUseCase.execute({ params: { uid: params._id } });
        await this.customerRepository.delete({ where: { _id: params === null || params === void 0 ? void 0 : params._id } });
    }
}
exports.DeleteCustomersUseCase = DeleteCustomersUseCase;
