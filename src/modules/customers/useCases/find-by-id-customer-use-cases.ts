import { Customer } from '../../../shared/domain/customers'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class FindByIdCustomerUseCase implements IUseCase<undefined, Customer, Customer> {
  private readonly customerRepository: IRepository<Customer>

  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Customer>): Promise<Customer> {
    if (!params?._id) { throw new NotFoundError('id not found in params') }
    const [customer] = await this.customerRepository.find({ where: { _id: params._id } })
    console.log({ _id: params._id })
    if (!customer) { throw new NotFoundError('Customer not found') }
    return customer
  }
}
