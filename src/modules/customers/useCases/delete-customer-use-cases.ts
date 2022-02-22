import { Customer } from '../../../shared/domain/customers'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IAuthenticationDeleteUseCase } from '../../../shared/protocols/useCases/autentication/delete-user-use-cases-interface'
import { IDeleteCustomersUseCaseParams, IDeleteCustomersUseCase } from '../../../shared/protocols/useCases/customers/delete-customer-use-cases'

export class DeleteCustomersUseCase implements IDeleteCustomersUseCase {
  private readonly customerRepository: IRepository<Customer>
  private readonly authenticationDeleteUseCase: IAuthenticationDeleteUseCase
  constructor ({ customerRepository, authenticationDeleteUseCase }: any) {
    this.authenticationDeleteUseCase = authenticationDeleteUseCase
    this.customerRepository = customerRepository
  }

  async execute ({ params }: IDeleteCustomersUseCaseParams): Promise<void> {
    const [customer] = await this.customerRepository.find({ where: { _id: params._id } })
    if (!customer) throw new NotFoundError()
    await this.authenticationDeleteUseCase.execute({ params: { uid: params._id } })
    await this.customerRepository.delete({ where: { _id: params?._id } })
  }
}
