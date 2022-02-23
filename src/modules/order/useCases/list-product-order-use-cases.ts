import { Order } from '../../../shared/domain/order'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IListOrderUseCase, IListOrderUseCaseParams, IListOrderUseCaseResponse } from '../../../shared/protocols/useCases/order/list-order-use-cases-interface'

export class ListOrderUseCase implements IListOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ params }: IListOrderUseCaseParams): Promise<IListOrderUseCaseResponse> {
    const list = await this.orderRepository.listProducts({ where: { ...params } })
    return this.formatResponse(list)
  }

  private formatResponse (order: Order): Order {
    const totalPrice = order.items.reduce((prev, current) => prev + current.price * current.quantity, 0)
    return {
      _id: order._id,
      customerId: order.customerId,
      status: order.status,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      totalPrice,
      items: order.items
    }
  }
}
