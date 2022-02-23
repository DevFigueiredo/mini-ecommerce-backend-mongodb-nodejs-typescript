import { Order } from '../../../domain/order'
import { IUseCase } from '../use-cases'

export interface IFlushOrderUseCaseParams {
  params: Pick<Partial<Order>, 'customerId' | 'status'>
}
export type IFlushOrderUseCaseResponse = void

export type IFlushOrderUseCase = IUseCase<IFlushOrderUseCaseParams, IFlushOrderUseCaseResponse>
