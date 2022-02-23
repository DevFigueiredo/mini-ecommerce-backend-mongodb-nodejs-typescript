import { Order } from '../../../domain/order'
import { OrderItems } from '../../../domain/order-items'
import { IUseCase } from '../use-cases'

export interface IRemoveProductOrderUseCaseParams {
  params: Pick<Partial<Order>, 'customerId' | 'status'> & Pick<OrderItems, 'productId'>
}
export type IRemoveProductOrderUseCaseResponse = void

export type IRemoveProductOrderUseCase = IUseCase<IRemoveProductOrderUseCaseParams, IRemoveProductOrderUseCaseResponse>
