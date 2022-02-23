import { Order } from '../../../domain/order'
import { IUseCase } from '../use-cases'

export interface IUpdateOrderUseCaseParams {
  entity?: Order
  params?: Pick<Order, '_id'>
}
export type IUpdateOrderUseCaseResponse = void

export type IUpdateOrderUseCase = IUseCase<IUpdateOrderUseCaseParams, IUpdateOrderUseCaseResponse>
