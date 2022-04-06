// import Redis from 'ioredis'
// import "dotenv/config"
// const host =  process.env.REDIS_HOST
// const port =  Number(process.env.REDIS_PORT || 6379)
// const connectRedisDatabase = new Redis({
//     host,
//     port
// })

// export { connectRedisDatabase }
import {Datastore} from '@google-cloud/datastore';
import NsqlCache from 'nsql-cache'; // new
import dsAdapter from 'nsql-cache-datastore';
import redisStore from 'cache-manager-redis-store';


const datastore = new Datastore({});
const cache = new NsqlCache({
    db: dsAdapter(datastore),
    stores: [{
    store: redisStore,
    host: '10.122.100.19',
    port: 6379,
    auth_pass: '11304125-fdfe-4bb1-b538-bb1e1f461e79'
}] });
export { datastore, cache };