import { Establishment } from '../../../shared/domain/establishment'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class FindByIdEstablishmentUseCase implements IUseCase<undefined, Establishment, Establishment> {
  private readonly establishmentRepository: IRepository<Establishment>

  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Establishment>): Promise<Establishment> {
    if (!params?._id) { throw new NotFoundError('id not found in params') }
    const [establishments] = await this.establishmentRepository.find({ where: { _id: params._id } })
    if (!establishments) { throw new NotFoundError('establishment not found') }
    return establishments
  }
}
