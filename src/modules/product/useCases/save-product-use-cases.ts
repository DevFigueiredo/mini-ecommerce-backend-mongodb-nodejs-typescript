
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { ISaveProductUseCase, ISaveProductUseCaseParams, ISaveProductUseCaseResponse } from '../../../shared/protocols/useCases/product/create-product-use-cases'
import { Product } from '../../../shared/domain/product'
import api from '../../../shared/utils/api'
import { Establishment } from '../../../shared/domain/Establishment'

export class SaveProductUseCase implements ISaveProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ entity }: ISaveProductUseCaseParams): Promise<ISaveProductUseCaseResponse> {
    entity._id = generateUUID()
    await this.getEstablishment(entity.establishmentId)
    await this.productRepository.save(entity)
    return entity._id
  }

  private async getEstablishment (establishmentId: string): Promise<Establishment> {
    console.log(`/establishment/${establishmentId}`)
    const { data: establishment } = await api.get(`/establishment/${establishmentId}`)
    return establishment
  }
}
