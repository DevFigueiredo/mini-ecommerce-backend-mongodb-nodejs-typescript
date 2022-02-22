import { Establishment } from '../../../shared/domain/establishment'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class FindEstablishmentsUseCase implements IUseCase<undefined, Establishment, Establishment[]> {
  private readonly establishmentRepository: IRepository<Establishment>
  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Establishment>): Promise<Establishment[]> {
    const establishments = await this.establishmentRepository.find({ where: params })
    return establishments
  }
}
