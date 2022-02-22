import { Customer } from '../../domain/customers'

export interface ICustormersValidator {
  validateOnSave: (customer: Customer) => void
  validateOnUpdate: (customer: Customer) => void
}
