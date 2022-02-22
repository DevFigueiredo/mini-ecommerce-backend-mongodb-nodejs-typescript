import firebaseAdmin from 'firebase-admin'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IAuthenticationCreateParams, IAuthenticationCreateResponse, IAuthenticationCreateUseCase } from '../../../shared/protocols/useCases/autentication/create-user-use-cases-interface'

export class AuthenticationCreateUseCase implements IAuthenticationCreateUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ entity }: IAuthenticationCreateParams): Promise<IAuthenticationCreateResponse> {
    try {
      const firebaseUser = await this.firebaseAdmin.createUser({
        uid: entity.uid,
        email: entity.email,
        password: entity.password,
        displayName: entity.displayName,
        emailVerified: true
      })
      return firebaseUser.uid
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new InvalidParamError('Email already exists.')
      }
      throw error
    }
  }
}
