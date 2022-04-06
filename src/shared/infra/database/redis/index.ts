import Redis from 'ioredis'
import "dotenv/config"
const host =  process.env.REDIS_HOST
const port =  Number(process.env.REDIS_PORT || 6379)
const connectRedisDatabase = new Redis({
    host,
    port
})

export { connectRedisDatabase }