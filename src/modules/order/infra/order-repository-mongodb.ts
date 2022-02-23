import { Order } from '../../../shared/domain/order'
import { OrderItems } from '../../../shared/domain/order-items'
import { OrderModel } from '../../../shared/infra/database/mongodb/schemas/order-schema'
import { Builder } from '../../../shared/protocols/repositories/builder'
import { IOrderRepository, IOrderRepositoryAddProductsParam, IOrderRepositoryFlushProductsParam, IOrderRepositoryListProductsParam, IOrderRepositoryRemoveProductsParam } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'

export class OrderRepository implements IOrderRepository {
  async addProduct (entity: OrderItems, params: IOrderRepositoryAddProductsParam): Promise<void> {
    void await OrderModel.findOneAndUpdate(params.where, {
      $push: {
        items: entity
      }
    }, { upsert: true })
  }

  async listProducts (params: IOrderRepositoryListProductsParam): Promise<Order> {
    const order = await OrderModel.findOne(params.where)
    return order
  }

  async flushProducts (params: IOrderRepositoryFlushProductsParam): Promise<void> {
    void await OrderModel.findOneAndUpdate(params.where, {
      $unset: {
        items: ''
      }
    })
  }

  async removeProduct (params: IOrderRepositoryRemoveProductsParam): Promise<void> {
    void await OrderModel.findOneAndUpdate({ customerId: params.where.customerId, status: params.where.status }, {
      $pull: {
        items: { productId: params.where.productId }
      }
    })
  }

  async find (params: Builder<Order>): Promise<Order[]> {
    return await OrderModel.find(params.where)
  }

  async update (entity: Order, params: Builder<Order>): Promise<void> {
    void await OrderModel.updateOne(params.where, entity)
  }

  async delete (params: Builder<Order>): Promise<void> {
    void await OrderModel.deleteOne(params.where)
  }

  async save (entity: Order): Promise<void> {
    const establishment = new OrderModel(entity)
    await establishment.save()
  }
}
