import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IFindCustomersUseCaseParams, IFindCustomersUseCase } from '../../../shared/protocols/useCases/customers/find-customer-use-cases'
export class FindCustomersUseCase implements IFindCustomersUseCase {
  private readonly customerRepository: IRepository<Customer>
  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IFindCustomersUseCaseParams): Promise<Customer[]> {
    const Customers = await this.customerRepository.find({ where: params })
    return Customers
  }
}
