import { IOrderRepository } from '../../../shared/protocols/repositories/order/order-repository-mongodb-interface'
import { IListOrderUseCase, IListOrderUseCaseParams, IListOrderUseCaseResponse } from '../../../shared/protocols/useCases/order/list-order-use-cases-interface'

export class ListOrderUseCase implements IListOrderUseCase {
  private readonly orderRepository: IOrderRepository
  constructor ({ orderRepository }: any) {
    this.orderRepository = orderRepository
  }

  async execute ({ params }: IListOrderUseCaseParams): Promise<IListOrderUseCaseResponse> {
    const list = await this.orderRepository.listProducts({ where: { ...params } })
    return list
  }
}
