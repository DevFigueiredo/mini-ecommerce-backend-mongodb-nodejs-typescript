import { Product } from '../../../domain/product'
import { IUseCase } from '../use-cases'

export interface IFindByIdProductUseCaseParams {
  params?: Pick<Product, '_id'>
}
export type IFindByIdProductUseCaseResponse = Product

export type IFindByIdProductUseCase = IUseCase<IFindByIdProductUseCaseParams, IFindByIdProductUseCaseResponse>
