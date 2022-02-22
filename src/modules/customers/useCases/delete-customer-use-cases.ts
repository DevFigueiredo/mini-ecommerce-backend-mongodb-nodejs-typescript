import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class DeleteCustomersUseCase implements IUseCase<undefined, Customer, void> {
  private readonly customerRepository: IRepository<Customer>
  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Customer>): Promise<void> {
    await this.customerRepository.delete({ where: { _id: params?._id } })
  }
}
