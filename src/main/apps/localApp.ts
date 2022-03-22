/* eslint-disable @typescript-eslint/no-var-requires */
import express, { json } from 'express'
import cors from 'cors'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { errorsMiddleware } from '../../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../../shared/container'

const app = express()

app.use(json())
app.use(cors())
app.use('/uploads/images', express.static('uploads/images'))

app.use(scopePerRequest(container))
app.use(loadControllers('./../../shared/infra/http/controllers/awilix-express/**/*.ts', { cwd: __dirname }))
app.use(loadControllers('./../../shared/infra/http/controllers/awilix-express/**/*.js', { cwd: __dirname }))
app.use(errorsMiddleware)
export { app }
