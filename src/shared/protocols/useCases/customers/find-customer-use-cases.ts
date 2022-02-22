import { Customer } from '../../../domain/customers'
import { IUseCase } from '../use-cases'

export interface IFindCustomersUseCaseParams {
  params?: Partial<Customer>
}
export type IFindCustomersUseCaseResponse = Customer[]

export type IFindCustomersUseCase = IUseCase<IFindCustomersUseCaseParams, IFindCustomersUseCaseResponse>
