import { Customer } from '../../../shared/domain/customers'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IFindByIdCustomersUseCase, IFindByIdCustomersUseCaseParams, IFindByIdCustomersUseCaseResponse } from '../../../shared/protocols/useCases/customers/find-by-id-customer-use-cases'

export class FindByIdCustomerUseCase implements IFindByIdCustomersUseCase {
  private readonly customerRepository: IRepository<Customer>

  constructor ({ customerRepository }: any) {
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IFindByIdCustomersUseCaseParams): Promise<IFindByIdCustomersUseCaseResponse> {
    if (!params?._id) { throw new NotFoundError('id not found in params') }
    const [customer] = await this.customerRepository.find({ where: { _id: params._id } })
    console.log({ _id: params._id })
    if (!customer) { throw new NotFoundError('Customer not found') }
    return customer
  }
}
