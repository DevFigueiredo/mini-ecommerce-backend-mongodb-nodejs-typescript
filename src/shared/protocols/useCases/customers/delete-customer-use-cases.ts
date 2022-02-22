import { Customer } from '../../../domain/customers'
import { IUseCase } from '../use-cases'

export interface IDeleteCustomersUseCaseParams {
  params?: Pick<Customer, '_id'>
}

export type IDeleteCustomersUseCase = IUseCase<IDeleteCustomersUseCaseParams, void>
