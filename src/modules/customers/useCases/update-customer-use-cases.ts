import { Customer } from '../../../shared/domain/customers'
import { MissingParamError } from '../../../shared/errors/missing-params-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IAuthenticationUpdateUseCase } from '../../../shared/protocols/useCases/autentication/update-user-use-cases-interface'
import { IUpdateCustomerUseCase, IUpdateCustomerUseCaseParams } from '../../../shared/protocols/useCases/customers/update-customer-use-cases'
import { ICustormersValidator } from '../../../shared/validators/interfaces/ICustormersValidator'

export class UpdateCustomersUseCase implements IUpdateCustomerUseCase {
  private readonly customerRepository: IRepository<Customer>
  private readonly custormersValidator: ICustormersValidator
  private readonly authenticationUpdateUseCase: IAuthenticationUpdateUseCase

  constructor ({ customerRepository, custormersValidator, authenticationUpdateUseCase }: any) {
    this.customerRepository = customerRepository
    this.custormersValidator = custormersValidator
    this.authenticationUpdateUseCase = authenticationUpdateUseCase
  }

  async execute ({ entity, params }: IUpdateCustomerUseCaseParams): Promise<void> {
    if (!params._id) {
      throw new MissingParamError('id')
    }
    this.custormersValidator.validateOnUpdate(entity)
    await this.authenticationUpdateUseCase.execute({ entity, params: { uid: params._id } })
    delete entity.password
    await this.customerRepository.update(entity, { where: params })
  }
}
