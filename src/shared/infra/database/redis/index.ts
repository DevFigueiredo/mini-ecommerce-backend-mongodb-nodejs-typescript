import Redis from 'ioredis'

const connectRedisDatabase = new Redis()

export { connectRedisDatabase }