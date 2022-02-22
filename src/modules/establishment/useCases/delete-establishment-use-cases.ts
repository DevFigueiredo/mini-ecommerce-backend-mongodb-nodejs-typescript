import { Establishment } from '../../../shared/domain/establishment'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class DeleteEstablishmentsUseCase implements IUseCase<undefined, Establishment, void> {
  private readonly establishmentRepository: IRepository<Establishment>
  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Establishment>): Promise<void> {
    await this.establishmentRepository.delete({ where: { _id: params?._id } })
  }
}
