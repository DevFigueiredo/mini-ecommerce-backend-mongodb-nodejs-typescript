import firebaseAdmin from 'firebase-admin'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IAuthenticationDeleteParams, IAuthenticationDeleteUseCase } from '../../../shared/protocols/useCases/autentication/delete-user-use-cases-interface'

export class AuthenticationDeleteUseCase implements IAuthenticationDeleteUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ params }: IAuthenticationDeleteParams): Promise<void> {
    try {
      const firebaseUser = await this.firebaseAdmin.deleteUser(params.uid)
      return firebaseUser
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new InvalidParamError('Email already exists.')
      }
      throw error
    }
  }
}
