import { NextFunction, Request, Response } from 'express'
import { ForbiddenError } from '../../../errors/forbidden-error'
import { InvalidParamError } from '../../../errors/invalid-param-error'
import { NotFoundError } from '../../../errors/not-found-error'
import { HttpStatusHelper } from '../../../enums/http-status-helper'
import { MissingParamError } from '../../../errors/missing-params-error'
import { Unauthorized } from '../../../errors/unauthorized'
import { Logger } from '../../../../modules/logger/logger-service'
import { container } from '../../../../shared/container'

export async function errorsMiddleware (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> {
  const logger: Logger = container.resolve('logger')
  const meta = {
    labels: {
      url: request.url
    }
  }
  if (error instanceof InvalidParamError) {
    logger.warn(error.stack, meta)
    return response.status(HttpStatusHelper.badRequest).json({ error: error.message })
  }
  if (error instanceof MissingParamError) {
    logger.warn(error.stack, meta)
    return response.status(HttpStatusHelper.badRequest).json({ error: error.message })
  }
  if (error instanceof ForbiddenError) {
    logger.warn(error.stack, meta)
    return response.status(HttpStatusHelper.Forbidden).json({ error: error.message })
  }
  if (error instanceof NotFoundError) {
    logger.warn(error.stack, meta)
    return response.status(HttpStatusHelper.NotFound).json({ error: error.message })
  }
  if (error instanceof Unauthorized) {
    logger.warn(error.stack, meta)
    return response.status(HttpStatusHelper.Unauthorized).json({ error: error.message })
  }

  logger.error(error.stack, meta)
  return response.status(HttpStatusHelper.InternalServerError).json({ error: 'Ocorreu um erro interno' })
}
