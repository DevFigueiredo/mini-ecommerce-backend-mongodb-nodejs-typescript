import { Customer } from '../../../domain/customers'
import { IUseCase } from '../use-cases'

export interface ISaveCustomersUseCaseParams {
  entity?: Customer
}
export type ISaveCustomersUseCaseResponse = string

export type ISaveCustomersUseCase = IUseCase<ISaveCustomersUseCaseParams, ISaveCustomersUseCaseResponse>
