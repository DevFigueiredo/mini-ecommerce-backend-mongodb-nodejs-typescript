import firebaseAdmin from 'firebase-admin'
import { Authentication } from '../../../shared/domain/authentication'
import { InvalidParamError } from '../../../shared/errors/invalid-param-error'
import { IExecuteUseCase, IUseCase } from '../../../shared/protocols/useCases/use-cases'

export class AuthenticationVerifyTokenUseCase implements IUseCase<undefined, string, Authentication> {
  private readonly firebaseAdmin: firebaseAdmin.auth.Auth

  constructor ({ firebaseAdmin }) {
    this.firebaseAdmin = firebaseAdmin.auth()
  }

  async execute ({ params }: IExecuteUseCase<undefined, string>): Promise<any> {
    try {
      const {
        uid,
        email,
        password,
        displayName,
        phoneNumber,
        emailVerified,
        photoURL,
        disable

      } = await this.firebaseAdmin.verifyIdToken(params)
      return {
        uid,
        email,
        password,
        displayName,
        phoneNumber,
        emailVerified,
        photoURL,
        disable
      }
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
