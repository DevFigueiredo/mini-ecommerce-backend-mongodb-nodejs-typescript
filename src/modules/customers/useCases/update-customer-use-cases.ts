
import { Authentication } from '../../../shared/domain/authentication'
import { Customer } from '../../../shared/domain/customers'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'
import { ICustormersValidator } from '../../../shared/validators/interfaces/ICustormersValidator'

export class UpdateCustomersUseCase implements IUseCase<Customer, Customer, void> {
  private readonly customerRepository: IRepository<Customer>
  private readonly custormersValidator: ICustormersValidator
  private readonly authenticationUpdateUseCase: IUseCase<Partial<Authentication>, Pick<Authentication, 'uid'>, Authentication>

  constructor ({ customerRepository, custormersValidator, authenticationUpdateUseCase }: any) {
    this.customerRepository = customerRepository
    this.custormersValidator = custormersValidator
    this.authenticationUpdateUseCase = authenticationUpdateUseCase
  }

  async execute ({ entity, params }: IExecuteUseCase<Customer, Customer>): Promise<void> {
    if (!params) {
      throw new NotFoundError('Params where to update is required')
    }
    this.custormersValidator.validateOnUpdate(entity)
    await this.authenticationUpdateUseCase.execute({ entity, params: { uid: params.id } })
    await this.customerRepository.update(entity, { where: params })
  }
}
