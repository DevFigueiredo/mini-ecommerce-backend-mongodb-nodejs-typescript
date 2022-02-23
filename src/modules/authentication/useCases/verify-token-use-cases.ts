import firebaseAdmin from 'firebase-admin'
import { IAuthenticationVerifyTokenParams, IAuthenticationVerifyTokenUseCase } from '../../../shared/protocols/useCases/autentication/verify-token-use-cases-interface'

export class AuthenticationVerifyTokenUseCase implements IAuthenticationVerifyTokenUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ token }: IAuthenticationVerifyTokenParams): Promise<void> {
    await this.firebaseAdmin.verifyIdToken(token)
  }
}
