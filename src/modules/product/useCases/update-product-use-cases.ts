import { Product } from '../../../shared/domain/product'
import { MissingParamError } from '../../../shared/errors/missing-params-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IUpdateProductUseCase, IUpdateProductUseCaseParams } from '../../../shared/protocols/useCases/product/update-product-use-cases'

export class UpdateCustomersUseCase implements IUpdateProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ entity, params }: IUpdateProductUseCaseParams): Promise<void> {
    if (!params._id) {
      throw new MissingParamError('id')
    }
    await this.productRepository.update(entity, { where: params })
  }
}
