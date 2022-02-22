
import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { ICustormersValidator } from '../../../shared/validators/interfaces/ICustormersValidator'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { ISaveCustomersUseCaseParams, ISaveCustomersUseCase } from '../../../shared/protocols/useCases/customers/create-customer-use-cases'
import { IAuthenticationCreateUseCase } from '../../../shared/protocols/useCases/autentication/create-user-use-cases-interface'

export class SaveCustomersUseCase implements ISaveCustomersUseCase {
  private readonly customerRepository: IRepository<Customer>
  private readonly custormersValidator: ICustormersValidator
  private readonly authenticationCreateUseCase: IAuthenticationCreateUseCase

  constructor ({ customerRepository, custormersValidator, authenticationCreateUseCase }: any) {
    this.customerRepository = customerRepository
    this.custormersValidator = custormersValidator
    this.authenticationCreateUseCase = authenticationCreateUseCase
  }

  async execute ({ entity }: ISaveCustomersUseCaseParams): Promise<string> {
    entity._id = generateUUID()
    this.custormersValidator.validateOnSave(entity)
    await this.authenticationCreateUseCase.execute({ entity: { uid: entity._id, email: entity.email, password: entity.password, displayName: entity.firstName, phoneNumber: entity.phoneNumber } })
    delete entity.password
    await this.customerRepository.save(entity)
    return entity._id
  }
}
