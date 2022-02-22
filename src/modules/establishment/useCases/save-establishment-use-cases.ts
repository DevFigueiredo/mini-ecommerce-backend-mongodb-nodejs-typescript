
import { Establishment } from '../../../shared/domain/establishment'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IUploadImage } from '../../../shared/protocols/repositories/uploadImage'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class SaveEstablishmentUseCase implements IUseCase<Establishment, undefined, string> {
  private readonly establishmentRepository: IRepository<Establishment>
  private readonly uploadImage: IUploadImage

  constructor ({ establishmentRepository, uploadImage }: any) {
    this.establishmentRepository = establishmentRepository
    this.uploadImage = uploadImage
  }

  async execute ({ entity }: IExecuteUseCase<Establishment, undefined>): Promise<string> {
    entity.id = generateUUID()
    await this.uploadImageBase64(entity)
    await this.establishmentRepository.save(entity)
    return entity.id
  }

  private async uploadImageBase64 (entity: Establishment): Promise<void> {
    if (entity.imageBase64) {
      const { imageURL } = await this.uploadImage.uploadImageBase64('establishment', 'establishment-', entity.imageBase64)
      entity.imageURL = imageURL
    }
    delete entity.imageBase64
  }
}
