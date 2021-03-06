import firebaseAdmin from 'firebase-admin'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IAuthenticationUpdateParams, IAuthenticationUpdateUseCase } from '../../../shared/protocols/useCases/autentication/update-user-use-cases-interface'

export class AuthenticationUpdateUseCase implements IAuthenticationUpdateUseCase {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ entity, params }: IAuthenticationUpdateParams): Promise<void> {
    try {
      await this.firebaseAdmin.updateUser(params.uid, entity)
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new InvalidParamError('Email already exists.')
      }
      throw error
    }
  }
}
