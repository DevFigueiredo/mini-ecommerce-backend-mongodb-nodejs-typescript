import firebaseAdmin from 'firebase-admin'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IAuthenticationVerifyTokenParams, IAuthenticationVerifyTokenUseCase } from '../../../shared/protocols/useCases/autentication/verify-token-use-cases-interface'

export class AuthenticationVerifyTokenUseCase implements IAuthenticationVerifyTokenUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ token }: IAuthenticationVerifyTokenParams): Promise<void> {
    try {
      await this.firebaseAdmin.verifyIdToken(token)
    } catch (error) {
      if (error.code === 'auth/id-token-expired') {
        throw new InvalidParamError('Expired Token.')
      }
      if (error.code === 'auth/argument-error') {
        throw new InvalidParamError('Invalid Token')
      }
      throw error
    }
  }
}
