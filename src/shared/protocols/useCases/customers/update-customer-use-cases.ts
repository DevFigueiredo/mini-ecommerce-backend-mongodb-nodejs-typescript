
import { Customer } from '../../../domain/customers'
import { IUseCase } from '../use-cases'

export interface IUpdateCustomerUseCaseParams {
  entity?: Customer
  params?: Pick<Customer, '_id'>
}

export type IUpdateCustomerUseCase = IUseCase<IUpdateCustomerUseCaseParams, void>
