import { Establishment } from '../../../shared/domain/establishment'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IFindCustomersUseCaseParams } from '../../../shared/protocols/useCases/customers/find-customer-use-cases'
import { IFindByIdEstablishmentUseCase, IFindByIdEstablishmentUseCaseResponse } from '../../../shared/protocols/useCases/establishment/find-by-id-establishment-use-cases'

export class FindByIdEstablishmentUseCase implements IFindByIdEstablishmentUseCase {
  private readonly establishmentRepository: IRepository<Establishment>

  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: IFindCustomersUseCaseParams): Promise<IFindByIdEstablishmentUseCaseResponse> {
    if (!params?._id) { throw new NotFoundError('id not found in params') }
    const [establishment] = await this.establishmentRepository.find({ where: { _id: params._id } })
    if (!establishment) { throw new NotFoundError('establishment not found') }
    return establishment
  }
}
