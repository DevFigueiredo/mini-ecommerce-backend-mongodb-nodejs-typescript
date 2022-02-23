import { OrderStatus } from '../../../shared/enums/order-status-enum'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IRemoveProductOrderUseCase, IRemoveProductOrderUseCaseParams } from '../../../shared/protocols/useCases/order/remove-product-order-use-cases-interface'

export class RemoveProductOrderUseCase implements IRemoveProductOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ params }: IRemoveProductOrderUseCaseParams): Promise<void> {
    await this.orderRepository.removeProduct({ where: { customerId: params.customerId, productId: params.productId, status: OrderStatus.Bag } })
  }
}
