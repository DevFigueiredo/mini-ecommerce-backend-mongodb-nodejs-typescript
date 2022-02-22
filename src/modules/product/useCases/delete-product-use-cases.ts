import { Product } from '../../../shared/domain/product'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IDeleteProductUseCase, IDeleteProductUseCaseParams } from '../../../shared/protocols/useCases/product/delete-product-use-cases'

export class DeleteProductUseCase implements IDeleteProductUseCase {
  private readonly productRepository: IRepository<Product>
  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ params }: IDeleteProductUseCaseParams): Promise<void> {
    const [product] = await this.productRepository.find({ where: { _id: params._id } })
    if (!product) throw new NotFoundError()
    await this.productRepository.delete({ where: { _id: params?._id } })
  }
}
