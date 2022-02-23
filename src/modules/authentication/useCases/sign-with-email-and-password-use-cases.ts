import firebase from 'firebase'

import { IAuthenticationSignEmailAndPasswordParams, IAuthenticationSignEmailAndPasswordResponse, IAuthenticationSignEmailAndPasswordUseCase } from '../../../shared/protocols/useCases/autentication/sign-with-email-and-password-use-cases-interface'

export class AuthenticationSignEmailAndPasswordUseCase implements IAuthenticationSignEmailAndPasswordUseCase {
  private readonly firebaseAuth: firebase.auth.Auth

  constructor ({ firebaseAuth }) {
    this.firebaseAuth = firebaseAuth.auth()
  }

  async execute ({ email, password }: IAuthenticationSignEmailAndPasswordParams): Promise<IAuthenticationSignEmailAndPasswordResponse> {
    const authenticated = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    const token = authenticated.user.getIdToken()
    return token
  }
}
