import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class FindCustomersUseCase implements IUseCase<undefined, Customer, Customer[]> {
  private readonly customerRepository: IRepository<Customer>
  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Customer>): Promise<Customer[]> {
    const Customers = await this.customerRepository.find({ where: params })
    return Customers
  }
}
