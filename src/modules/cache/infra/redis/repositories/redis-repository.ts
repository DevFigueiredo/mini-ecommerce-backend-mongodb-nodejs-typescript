import { Redis } from 'ioredis'
import { promisify } from 'util'
import { IRepositoryCache } from '../../../../../shared/protocols/repositories/repositories'

export class RedisRepository implements IRepositoryCache<string, any> {
  private readonly collectionName = 'anys'
  private readonly dbCache: Redis

  constructor ({ dbCache }: any) {
    this.dbCache = dbCache
  }

  async find (key: string): Promise<any> {
    const syncGetRedis = promisify(this.dbCache.get).bind(this.dbCache)
    const finded: any = await syncGetRedis(`${this.collectionName}-${key}`)
    return finded && JSON.parse(finded)
  }

  async save (key: string, value: any): Promise<void> {
    const syncSetRedis = promisify(this.dbCache.set).bind(this.dbCache)
    await syncSetRedis(`${this.collectionName}-${key}`, JSON.stringify(value))
  }
}
