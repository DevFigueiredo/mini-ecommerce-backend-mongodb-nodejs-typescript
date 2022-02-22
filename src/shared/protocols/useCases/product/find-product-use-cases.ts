import { Product } from '../../../domain/product'
import { IUseCase } from '../use-cases'

export interface IFindProductUseCaseParams {
  params?: Partial<Product>
}
export type IFindProductUseCaseResponse = Product[]

export type IFindProductUseCase = IUseCase<IFindProductUseCaseParams, IFindProductUseCaseResponse>
