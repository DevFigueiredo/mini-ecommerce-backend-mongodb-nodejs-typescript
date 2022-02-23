import { NextFunction, Request, Response } from 'express'
import { container } from '../../../container'
import { HttpStatusHelper } from '../../../enums/http-status-helper'
import { IAuthenticationVerifyTokenUseCase } from '../../../protocols/useCases/autentication/verify-token-use-cases-interface'

export async function ensureAuthenticatedMiddleware (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> {
  try {
    const AuthToken = request.headers.authorization
    const authenticationVerifyTokenUseCase: IAuthenticationVerifyTokenUseCase = container.resolve('authenticationVerifyTokenUseCase')

    if (!AuthToken) { return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' }) }

    const [bearer, token] = AuthToken.split(' ')

    if ((bearer !== 'Bearer') || !token) return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' })

    const tokenValidate = await authenticationVerifyTokenUseCase.execute({ token: token })
    request.customerId = tokenValidate.uid

    next()
  } catch (error) {
    if (error.code === 'auth/id-token-expired') {
      return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Expired Token.' })
    }
    if (error.code === 'auth/argument-error') {
      return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' })
    }
    throw error
  }
}
