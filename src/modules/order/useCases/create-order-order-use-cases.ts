import { OrderStatus } from '../../../shared/enums/order-status-enum'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { ICreateOrderUseCase, ICreateOrderUseCaseParams } from '../../../shared/protocols/useCases/order/create-order-use-cases-interface'

export class CreateOrderUseCase implements ICreateOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ entity }: ICreateOrderUseCaseParams): Promise<void> {
    const [orderExists] = await this.orderRepository.find({ where: { customerId: entity.customerId, status: OrderStatus.Bag } })
    if (orderExists) throw new InvalidParamError('Already exists order in a bag')
    entity._id = generateUUID()
    await this.orderRepository.save({ ...entity, status: OrderStatus.Bag })
  }
}
