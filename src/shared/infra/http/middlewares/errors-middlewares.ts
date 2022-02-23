import { NextFunction, Request, Response } from 'express'
import { ForbiddenError } from '../../../errors/forbidden-error'
import { InvalidParamError } from '../../../errors/invalid-param-error'
import { NotFoundError } from '../../../errors/not-found-error'
import { HttpStatusHelper } from '../../../enums/http-status-helper'
import { MissingParamError } from '../../../errors/missing-params-error'
import { Unauthorized } from '../../../errors/unauthorized'

export async function errorsMiddleware (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> {
  if (error instanceof InvalidParamError) {
    return response.status(HttpStatusHelper.badRequest).json({ error: error.message })
  }
  if (error instanceof MissingParamError) {
    return response.status(HttpStatusHelper.badRequest).json({ error: error.message })
  }
  if (error instanceof ForbiddenError) {
    return response.status(HttpStatusHelper.Forbidden).json({ error: error.message })
  }
  if (error instanceof NotFoundError) {
    return response.status(HttpStatusHelper.NotFound).json({ error: error.message })
  }
  if (error instanceof Unauthorized) {
    return response.status(HttpStatusHelper.Unauthorized).json({ error: error.message })
  }

  console.error(error)
  return response.status(HttpStatusHelper.InternalServerError).json({ error: 'Ocorreu um erro interno' })
}
