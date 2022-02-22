import { Establishment } from '../../../shared/domain/Establishment'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { FindEstablishmentUseCaseParams, IFindCustomersUseCaseResponse, IFindEstablishmentUseCase } from '../../../shared/protocols/useCases/establishment/find-establishment-use-cases'

export class FindEstablishmentsUseCase implements IFindEstablishmentUseCase {
  private readonly establishmentRepository: IRepository<Establishment>
  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: FindEstablishmentUseCaseParams): Promise<IFindCustomersUseCaseResponse> {
    const establishments = await this.establishmentRepository.find({ where: params })
    return establishments
  }
}
