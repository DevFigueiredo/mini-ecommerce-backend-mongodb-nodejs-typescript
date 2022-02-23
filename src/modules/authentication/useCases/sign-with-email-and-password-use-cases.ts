import firebase from 'firebase'
import { MissingParamError } from '../../../shared/errors/missing-params-error'
import { Unauthorized } from '../../../shared/errors/unauthorized'

import { IAuthenticationSignEmailAndPasswordParams, IAuthenticationSignEmailAndPasswordResponse, IAuthenticationSignEmailAndPasswordUseCase } from '../../../shared/protocols/useCases/autentication/sign-with-email-and-password-use-cases-interface'

export class AuthenticationSignEmailAndPasswordUseCase implements IAuthenticationSignEmailAndPasswordUseCase {
  private readonly firebaseAuth: firebase.auth.Auth

  constructor ({ firebaseAuth }) {
    this.firebaseAuth = firebaseAuth
  }

  async execute ({ email, password }: IAuthenticationSignEmailAndPasswordParams): Promise<IAuthenticationSignEmailAndPasswordResponse> {
    if (!email) throw new MissingParamError('email')
    if (!password) throw new MissingParamError('password')
    try {
      const authenticated = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      const token = await authenticated.user.getIdToken()
      const refreshToken = authenticated.user.refreshToken
      return { token, refreshToken, expiresIn: '1h' }
    } catch (error) {
      throw new Unauthorized('User or password is invalid!')
    }
  }
}
