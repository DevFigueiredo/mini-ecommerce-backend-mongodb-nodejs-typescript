import { CustomerApp } from "../../domain/CustomerApp";

export interface ICustormersValidator {
    validateOnSave(customer: CustomerApp): void;
    validateOnUpdate(customer: CustomerApp): void;
}
