import { Product } from '../../../domain/product'
import { IUseCase } from '../use-cases'

export interface IDeleteProductUseCaseParams {
  params?: Pick<Product, '_id'>
}

export type IDeleteProductUseCase = IUseCase<IDeleteProductUseCaseParams, void>
