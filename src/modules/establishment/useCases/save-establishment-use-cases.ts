
import { Establishment } from '../../../shared/domain/establishment'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IUploadImage } from '../../../shared/protocols/repositories/uploadImage'
import { ISaveCustomersUseCaseResponse } from '../../../shared/protocols/useCases/customers/create-customer-use-cases'
import { ISaveEstablishmentUseCase, SaveEstablishmentUseCaseParams } from '../../../shared/protocols/useCases/establishment/save-establishment-use-cases'

export class SaveEstablishmentUseCase implements ISaveEstablishmentUseCase {
  private readonly establishmentRepository: IRepository<Establishment>
  private readonly uploadImage: IUploadImage

  constructor ({ establishmentRepository, uploadImage }: any) {
    this.establishmentRepository = establishmentRepository
    this.uploadImage = uploadImage
  }

  async execute ({ entity }: SaveEstablishmentUseCaseParams): Promise<ISaveCustomersUseCaseResponse> {
    entity._id = generateUUID()
    await this.uploadImageBase64(entity)
    await this.establishmentRepository.save(entity)
    return entity._id
  }

  private async uploadImageBase64 (entity: Establishment): Promise<void> {
    if (entity.imageBase64) {
      const { imageURL } = await this.uploadImage.uploadImageBase64('establishment', 'establishment-', entity.imageBase64)
      entity.imageURL = imageURL
    }
    delete entity.imageBase64
  }
}
