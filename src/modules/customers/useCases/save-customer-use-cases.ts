
import { Customer } from '../../../shared/domain/customers'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'
import firebaseAdmin from 'firebase-admin'
import { ICustormersValidator } from '../../../shared/validators/interfaces/ICustormersValidator'
import { Authentication } from '../../../shared/domain/authentication'

export class SaveCustomersUseCase implements IUseCase<Customer, undefined, string> {
  private readonly customerRepository: IRepository<Customer>
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth
  private readonly custormersValidator: ICustormersValidator
  private readonly authenticationCreateUseCase: IUseCase<Partial<any>, undefined, Authentication>

  constructor ({ customerRepository, firebaseAdmin, custormersValidator, authenticationCreateUseCase }: any) {
    this.customerRepository = customerRepository
    this.firebaseAdmin = firebaseAdmin.auth()
    this.custormersValidator = custormersValidator
    this.authenticationCreateUseCase = authenticationCreateUseCase
  }

  async execute ({ entity }: IExecuteUseCase<Customer, undefined>): Promise<string> {
    this.custormersValidator.validateOnSave(entity)
    await this.authenticationCreateUseCase.execute({ entity: { uid: entity.id, email: entity.email, password: entity.password, displayName: entity.firstName, phoneNumber: entity.phoneNumber } })
    delete entity.password
    await this.customerRepository.save(entity)
    return entity.id
  }
}
