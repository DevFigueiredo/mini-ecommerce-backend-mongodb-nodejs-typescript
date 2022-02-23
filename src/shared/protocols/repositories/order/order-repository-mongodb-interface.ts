import { Order } from '../../../domain/order'
import { OrderItems } from '../../../domain/order-items'
import { Builder } from '../builder'
import { IRepository } from '../repositories'
export type IOrderRepositoryRemoveProductsParam = Builder<Pick<Partial<Order>, '_id' | 'customerId' | 'status'> & Pick<OrderItems, 'productId'>>
export type IOrderRepositoryFlushProductsParam = Builder<Pick<Partial<Order>, '_id' | 'customerId' | 'status'>>
export type IOrderRepositoryListProductsParam = Builder<Pick<Partial<Order>, '_id' | 'customerId' | 'status'> & Pick<OrderItems, 'productId'>>
export type IOrderRepositoryAddProductsParam = Builder<Pick<Partial<Order>, '_id' | 'customerId' | 'status'>>

export interface IOrderRepository extends IRepository<Order> {
  addProduct: (entity: OrderItems, params: IOrderRepositoryAddProductsParam) => Promise<void>
  listProducts: (params: IOrderRepositoryListProductsParam) => Promise<Order>
  flushProducts: (params: IOrderRepositoryFlushProductsParam) => Promise<void>
  removeProduct: (params: IOrderRepositoryRemoveProductsParam) => Promise<void>

}
