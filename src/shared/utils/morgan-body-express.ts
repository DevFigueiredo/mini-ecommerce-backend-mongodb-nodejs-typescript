import morganBody from 'morgan-body'
import bodyParser from 'body-parser'
import { Express } from 'express'
import { container } from '../container'
export const morganBodyExpress = (app: Express): void => {
  const logger = container.resolve('logger')
  const loggerStream = {
    write: (message: string) => {
      logger.info(message)
      return true
    }
  }
  app.use(bodyParser.json())
  return morganBody(app, { stream: loggerStream, maxBodyLength: 10000 })
}
