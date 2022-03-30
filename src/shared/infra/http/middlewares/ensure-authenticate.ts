import { NextFunction, Request, Response } from 'express'
import { Customer } from 'src/shared/domain/customers'
import { IFindCacheUseCase } from 'src/shared/protocols/useCases/cache/find-cache-use-case-interface'
import { ISaveCacheUseCase } from 'src/shared/protocols/useCases/cache/save-cache-use-case-interface'
import { container } from '../../../container'
import { HttpStatusHelper } from '../../../enums/http-status-helper'
import { IAuthenticationVerifyTokenUseCase } from '../../../protocols/useCases/autentication/verify-token-use-cases-interface'

export async function ensureAuthenticatedMiddleware (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> {
  try {
    const saveCacheUseCases: ISaveCacheUseCase = container.resolve('saveCacheUseCases')
    const findCacheUseCases: IFindCacheUseCase<Customer> = container.resolve('findCacheUseCases')

    const AuthToken = request.headers.authorization
    const authenticationVerifyTokenUseCase: IAuthenticationVerifyTokenUseCase = container.resolve('authenticationVerifyTokenUseCase')

    if (!AuthToken) { return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' }) }

    const [bearer, token] = AuthToken.split(' ')

    if ((bearer !== 'Bearer') || !token) return response.status(HttpStatusHelper.Unauthorized).json({ error: 'Invalid Token' })

    const tokenValidate = await authenticationVerifyTokenUseCase.execute({ token: token })

    const user = await findCacheUseCases.execute({ key: `user-${tokenValidate.uid}` })
    if (!user) { await saveCacheUseCases.execute({ entity: { key: `user-${tokenValidate.uid}`, value: tokenValidate } }) }
    console.log({ user: user || 'nada' })

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
