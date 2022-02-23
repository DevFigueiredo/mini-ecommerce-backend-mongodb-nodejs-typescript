import firebaseAdmin from 'firebase-admin'
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { IAuthenticationVerifyTokenParams, IAuthenticationVerifyTokenResponse, IAuthenticationVerifyTokenUseCase } from '../../../shared/protocols/useCases/autentication/verify-token-use-cases-interface'

export class AuthenticationVerifyTokenUseCase implements IAuthenticationVerifyTokenUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ token }: IAuthenticationVerifyTokenParams): Promise<IAuthenticationVerifyTokenResponse> {
    const tokenValidate: DecodedIdToken = await this.firebaseAdmin.verifyIdToken(token)
    return { uid: tokenValidate.uid, email: tokenValidate.email }
  }
}
