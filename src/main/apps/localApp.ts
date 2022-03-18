/* eslint-disable @typescript-eslint/no-var-requires */
import express, { json } from 'express'
import cors from 'cors'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { errorsMiddleware } from '../../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../../shared/container'

const estabiishmentApp = express()

estabiishmentApp.use(json())
estabiishmentApp.use(cors())
estabiishmentApp.use('/uploads/images', express.static('uploads/images'))

estabiishmentApp.use(scopePerRequest(container))
estabiishmentApp.use(loadControllers('./../../shared/infra/http/controllers/awilix-express/**/*.ts', { cwd: __dirname }))
estabiishmentApp.use(errorsMiddleware)
export { estabiishmentApp }
