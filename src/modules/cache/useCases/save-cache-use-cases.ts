import { ISaveCacheUseCase, ISaveCacheUseCaseParams } from '../../../shared/protocols/useCases/cache/save-cache-use-case-interface'
import { Cache } from '../../../shared/domain/cache'
import { IRepositoryCache } from '../../../shared/protocols/repositories/repositories'

export class SaveCacheUseCases implements ISaveCacheUseCase {
  private readonly redisRepository: IRepositoryCache<Cache['value'], Cache['key']>
  constructor ({ redisRepository }: any) {
    this.redisRepository = redisRepository
  }

  async execute ({ entity }: ISaveCacheUseCaseParams): Promise<void> {
    await this.redisRepository.save(entity.key, entity.value)
  }
}
