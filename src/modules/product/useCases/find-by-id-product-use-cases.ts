import { Product } from '../../../shared/domain/product'
import { MissingParamError } from '../../../shared/errors/missing-params-error'
import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IRepository } from '../../../shared/protocols/repositories/repositories'
import { IFindByIdProductUseCase, IFindByIdProductUseCaseParams, IFindByIdProductUseCaseResponse } from '../../../shared/protocols/useCases/product/find-by-id-product-use-cases'

export class FindByIdProductUseCase implements IFindByIdProductUseCase {
  private readonly productRepository: IRepository<Product>

  constructor ({ productRepository }: any) {
    this.productRepository = productRepository
  }

  async execute ({ params }: IFindByIdProductUseCaseParams): Promise<IFindByIdProductUseCaseResponse> {
    if (!params?._id) { throw new MissingParamError('id') }
    const [product] = await this.productRepository.find({ where: { _id: params._id } })
    if (!product) { throw new NotFoundError() }
    return product
  }
}
