
import { Datastore } from '@google-cloud/datastore'
import { promisify } from 'util'
import { IRepositoryCache } from '../../../../../shared/protocols/repositories/repositories'

export class RedisRepository implements IRepositoryCache<string, any> {
  private readonly dbCache: Datastore

  constructor ({ dbCache }: any) {
    this.dbCache = dbCache
  }

  async find (key: string): Promise<any> {
    const syncGetRedis = promisify(this.dbCache.get).bind(this.dbCache)
    const finded: any = await syncGetRedis(key)
    return finded && JSON.parse(finded)
  }

  async save (key: string, value: any): Promise<void> {
    const syncSetRedis = promisify(this.dbCache.key).bind(this.dbCache)
    await syncSetRedis(key, JSON.stringify(value))
  }
}
