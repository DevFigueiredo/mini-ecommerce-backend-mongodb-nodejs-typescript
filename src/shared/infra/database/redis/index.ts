import Redis from 'ioredis'

const connectRedisDatabase = new Redis({
    host: "10.122.100.19",
    port: 6379,
})

export { connectRedisDatabase }