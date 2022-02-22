import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IDeleteCustomersUseCaseParams, IDeleteCustomersUseCase } from '../../../shared/protocols/useCases/customers/delete-customer-use-cases'

export class DeleteCustomersUseCase implements IDeleteCustomersUseCase {
  private readonly customerRepository: IRepository<Customer>
  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IDeleteCustomersUseCaseParams): Promise<void> {
    await this.customerRepository.delete({ where: { _id: params?._id } })
  }
}
