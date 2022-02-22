
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { generateUUID } from '../../../shared/helpers/generateUUID'
import { ISaveProductUseCase, ISaveProductUseCaseParams, ISaveProductUseCaseResponse } from '../../../shared/protocols/useCases/product/create-product-use-cases'
import { Product } from '../../../shared/domain/product'

export class SaveCustomersUseCase implements ISaveProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ entity }: ISaveProductUseCaseParams): Promise<ISaveProductUseCaseResponse> {
    entity._id = generateUUID()
    await this.productRepository.save(entity)
    return entity._id
  }
}
