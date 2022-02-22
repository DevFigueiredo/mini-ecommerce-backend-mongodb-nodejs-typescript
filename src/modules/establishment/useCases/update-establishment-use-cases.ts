
import { Establishment } from '../../../shared/domain/establishment'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IUploadImage } from '../../../shared/protocols/repositories/uploadImage'
import { IUpdateEstablishmentUseCase, UpdateEstablishmentUseCaseParams } from '../../../shared/protocols/useCases/establishment/update-establishment-use-cases'

export class UpdateEstablishmentUseCase implements IUpdateEstablishmentUseCase {
  private readonly establishmentRepository: IRepository<Establishment>
  private readonly uploadImage: IUploadImage

  constructor ({ establishmentRepository, uploadImage }: any) {
    this.establishmentRepository = establishmentRepository
    this.uploadImage = uploadImage
  }

  async execute ({ entity, params }: UpdateEstablishmentUseCaseParams): Promise<void> {
    if (!params) {
      throw new NotFoundError('Params where to update is required')
    }
    await this.uploadImageBase64(entity)
    await this.establishmentRepository.update(entity, { where: params })
  }

  private async uploadImageBase64 (entity: Establishment): Promise<void> {
    if (entity.imageBase64) {
      const { imageURL } = await this.uploadImage.uploadImageBase64('establishment', 'establishment-', entity.imageBase64)
      entity.imageURL = imageURL
    }
    delete entity.imageBase64
  }
}
