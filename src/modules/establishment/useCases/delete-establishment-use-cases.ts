import { Establishment } from '../../../shared/domain/establishment'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IDeleteCustomersUseCaseParams } from '../../../shared/protocols/useCases/customers/delete-customer-use-cases'
import { IDeleteEstablishmentUseCase } from '../../../shared/protocols/useCases/establishment/delete-establishment-use-cases'

export class DeleteEstablishmentsUseCase implements IDeleteEstablishmentUseCase {
  private readonly establishmentRepository: IRepository<Establishment>
  constructor ({ establishmentRepository }: any) {
    this.establishmentRepository = establishmentRepository
  }

  async execute ({ params }: IDeleteCustomersUseCaseParams): Promise<void> {
    await this.establishmentRepository.delete({ where: { _id: params?._id } })
  }
}
