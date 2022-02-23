import { Order } from '../../../domain/order'
import { IUseCase } from '../use-cases'

export interface IListOrderUseCaseParams {
  params: Pick<Partial<Order>, 'customerId' | 'status'>
}
export type IListOrderUseCaseResponse = Order

export type IListOrderUseCase = IUseCase<IListOrderUseCaseParams, IListOrderUseCaseResponse>
