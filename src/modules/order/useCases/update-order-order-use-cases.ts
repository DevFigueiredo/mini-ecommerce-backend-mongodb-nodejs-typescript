import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IUpdateOrderUseCase, IUpdateOrderUseCaseParams } from '../../../shared/protocols/useCases/order/update-order-use-cases-interface'

export class UpdateOrderUseCase implements IUpdateOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ entity, params }: IUpdateOrderUseCaseParams): Promise<void> {
    const [orderExists] = await this.orderRepository.find({ where: { _id: params._id } })
    if (!orderExists) throw new InvalidParamError('Order not exists')
    await this.orderRepository.update(entity, { where: { _id: params._id } })
  }
}
