import firebaseAdmin from 'firebase-admin'
import { Authentication } from '../../../shared/domain/authentication'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class AuthenticationCreateUseCase implements IUseCase<Partial<Authentication>, undefined, Authentication> {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ entity }: IExecuteUseCase<Partial<Authentication>, undefined>): Promise<any> {
    try {
      const firebaseUser = await this.firebaseAdmin.createUser({
        email: entity.email,
        password: entity.password,
        displayName: entity.displayName,
        emailVerified: true
      })
      return firebaseUser
    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        throw new InvalidParamError('Email already exists.')
      }
      throw error
    }
  }
}
