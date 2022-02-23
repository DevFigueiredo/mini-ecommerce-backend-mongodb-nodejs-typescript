import { Order } from '../../../domain/order'
import { OrderItems } from '../../../domain/order-items'
import { IUseCase } from '../use-cases'

export interface IAddProductOrderUseCaseParams {
  entity?: Pick<OrderItems, 'quantity'> & Pick<OrderItems, 'productId'>
  params: Pick<Partial<Order>, '_id' | 'customerId'>
}
export type IAddProductOrderUseCaseResponse = void

export type IAddProductOrderUseCase = IUseCase<IAddProductOrderUseCaseParams, IAddProductOrderUseCaseResponse>
