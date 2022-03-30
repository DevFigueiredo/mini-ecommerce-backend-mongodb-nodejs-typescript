import { NotFoundError } from '../../../shared/errors/not-found-error'
import { IFindCacheUseCase, IFindCacheUseCaseParams } from 'src/shared/protocols/useCases/cache/find-cache-use-case-interface'
import { Cache } from '../../../shared/domain/cache'
import { IRepositoryCache } from '../../../shared/protocols/repositories/repositories'

export class FindCacheUseCases<EntityResponse> implements IFindCacheUseCase<EntityResponse> {
  private readonly redisRepository: IRepositoryCache<Cache['value'], Cache['key']>
  constructor ({ redisRepository }: any) {
    this.redisRepository = redisRepository
  }

  async execute ({ key }: IFindCacheUseCaseParams): Promise<EntityResponse> {
    const result = await this.redisRepository.find(key)
    if (!result) { throw new NotFoundError('Cache not found') }
    return result
  }
}
