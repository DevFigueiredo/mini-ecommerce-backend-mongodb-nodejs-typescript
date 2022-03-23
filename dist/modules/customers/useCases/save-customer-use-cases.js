"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCustomersUseCase = void 0;
const generateUUID_1 = require("../../../shared/helpers/generateUUID");
class SaveCustomersUseCase {
    constructor({ customerRepository, custormersValidator, authenticationCreateUseCase }) {
        this.customerRepository = customerRepository;
        this.custormersValidator = custormersValidator;
        this.authenticationCreateUseCase = authenticationCreateUseCase;
    }
    async execute({ entity }) {
        entity._id = (0, generateUUID_1.generateUUID)();
        this.custormersValidator.validateOnSave(entity);
        await this.authenticationCreateUseCase.execute({ entity: { uid: entity._id, email: entity.email, password: entity.password, displayName: entity.firstName, phoneNumber: entity.phoneNumber } });
        delete entity.password;
        await this.customerRepository.save(entity);
        return entity._id;
    }
}
exports.SaveCustomersUseCase = SaveCustomersUseCase;
