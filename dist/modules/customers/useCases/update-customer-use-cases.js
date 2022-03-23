"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomersUseCase = void 0;
const missing_params_error_1 = require("../../../shared/errors/missing-params-error");
class UpdateCustomersUseCase {
    constructor({ customerRepository, custormersValidator, authenticationUpdateUseCase }) {
        this.customerRepository = customerRepository;
        this.custormersValidator = custormersValidator;
        this.authenticationUpdateUseCase = authenticationUpdateUseCase;
    }
    async execute({ entity, params }) {
        if (!params._id) {
            throw new missing_params_error_1.MissingParamError('id');
        }
        this.custormersValidator.validateOnUpdate(entity);
        await this.authenticationUpdateUseCase.execute({ entity, params: { uid: params._id } });
        delete entity.password;
        await this.customerRepository.update(entity, { where: params });
    }
}
exports.UpdateCustomersUseCase = UpdateCustomersUseCase;
