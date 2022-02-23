import { OrderStatus } from '../../../shared/enums/order-status-enum'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IFlushOrderUseCase, IFlushOrderUseCaseParams } from '../../../shared/protocols/useCases/order/flush-order-use-cases-interface'

export class FlushOrderUseCase implements IFlushOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ params }: IFlushOrderUseCaseParams): Promise<void> {
    await this.orderRepository.flushProducts({ where: { ...params, status: OrderStatus.Bag } })
  }
}
