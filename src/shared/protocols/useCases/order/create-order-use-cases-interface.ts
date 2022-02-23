import { Order } from '../../../domain/order'
import { IUseCase } from '../use-cases'

export interface ICreateOrderUseCaseParams {
  entity?: Order
}
export type ICreateOrderUseCaseResponse = void

export type ICreateOrderUseCase = IUseCase<ICreateOrderUseCaseParams, ICreateOrderUseCaseResponse>
