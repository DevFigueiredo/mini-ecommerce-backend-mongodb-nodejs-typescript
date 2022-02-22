import { Customer } from '../../../domain/customers'
import { IUseCase } from '../use-cases'

export interface IFindByIdCustomersUseCaseParams {
  params?: Pick<Customer, '_id'>
}
export type IFindByIdCustomersUseCaseResponse = Customer

export type IFindByIdCustomersUseCase = IUseCase<IFindByIdCustomersUseCaseParams, IFindByIdCustomersUseCaseResponse>
