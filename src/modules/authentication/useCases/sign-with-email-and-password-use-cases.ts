import firebaseAdmin from 'firebase-admin'
import { IAuthenticationSignEmailAndPasswordParams, IAuthenticationSignEmailAndPasswordUseCase } from '../../../shared/protocols/useCases/autentication/sign-with-email-and-password-use-cases-interface'

export class AuthenticationSignEmailAndPasswordUseCase implements IAuthenticationSignEmailAndPasswordUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ email, password }: IAuthenticationSignEmailAndPasswordParams): Promise<void> {

  }
}
