import { Product } from '../../../domain/product'
import { IUseCase } from '../use-cases'

export interface ISaveProductUseCaseParams {
  entity?: Product
}
export type ISaveProductUseCaseResponse = string

export type ISaveProductUseCase = IUseCase<ISaveProductUseCaseParams, ISaveProductUseCaseResponse>
