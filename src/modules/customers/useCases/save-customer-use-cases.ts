
import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'
import { ICustormersValidator } from '../../../shared/validators/interfaces/ICustormersValidator'
import { Authentication } from '../../../shared/domain/authentication'
import { generateUUID } from '../../../shared/helpers/generateUUID'

export class SaveCustomersUseCase implements IUseCase<Customer, undefined, string> {
  private readonly customerRepository: IRepository<Customer>
  private readonly custormersValidator: ICustormersValidator
  private readonly authenticationCreateUseCase: IUseCase<Partial<any>, undefined, Authentication>

  constructor ({ customerRepository, custormersValidator, authenticationCreateUseCase }: any) {
    this.customerRepository = customerRepository
    this.custormersValidator = custormersValidator
    this.authenticationCreateUseCase = authenticationCreateUseCase
  }

  async execute ({ entity }: IExecuteUseCase<Customer, undefined>): Promise<string> {
    entity._id = generateUUID()
    this.custormersValidator.validateOnSave(entity)
    await this.authenticationCreateUseCase.execute({ entity: { uid: entity._id, email: entity.email, password: entity.password, displayName: entity.firstName, phoneNumber: entity.phoneNumber } })
    delete entity.password
    await this.customerRepository.save(entity)
    return entity._id
  }
}
