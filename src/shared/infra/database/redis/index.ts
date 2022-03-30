import Redis from 'ioredis'
import "dotenv/config"
const host =  process.env.HOST_REDIS
const port =  Number(process.env.PORT_REDIS)
const connectRedisDatabase = new Redis({
    host,
    port
})

export { connectRedisDatabase }