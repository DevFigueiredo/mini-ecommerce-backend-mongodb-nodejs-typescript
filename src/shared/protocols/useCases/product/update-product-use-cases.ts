
import { Product } from '../../../domain/product'
import { IUseCase } from '../use-cases'

export interface IUpdateProductUseCaseParams {
  entity?: Product
  params?: Pick<Product, '_id'>
}

export type IUpdateProductUseCase = IUseCase<IUpdateProductUseCaseParams, void>
