
import { Cache } from '../../../domain/cache'
import { IUseCase } from '../use-cases'

export interface ISaveCacheUseCaseParams {
  entity?: Cache
}
export type ISaveCacheUseCaseResponse = void

export type ISaveCacheUseCase = IUseCase<ISaveCacheUseCaseParams, ISaveCacheUseCaseResponse>
