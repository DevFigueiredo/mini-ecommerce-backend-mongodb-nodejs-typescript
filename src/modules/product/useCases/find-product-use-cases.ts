import { Product } from '../../../shared/domain/product'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IFindProductUseCase, IFindProductUseCaseParams, IFindProductUseCaseResponse } from '../../../shared/protocols/useCases/product/find-product-use-cases'
export class FindProductUseCase implements IFindProductUseCase {
  private readonly productRepository: IRepository<Product>
  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ params }: IFindProductUseCaseParams): Promise<IFindProductUseCaseResponse> {
    const Product = await this.productRepository.find({ where: params })
    return Product
  }
}
