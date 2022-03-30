
import { Cache } from '../../../domain/cache'
import { IUseCase } from '../use-cases'

export interface IFindCacheUseCaseParams {
  key?: Cache['key']
}
export type IFindCacheUseCaseResponse = Cache

export type IFindCacheUseCase<EntityResponse> = IUseCase<IFindCacheUseCaseParams, EntityResponse>
