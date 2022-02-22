
import { IUseCase } from '../use-cases'

export interface IAuthenticationSignEmailAndPasswordParams {
  email: string
  password: string
}

export type IAuthenticationSignEmailAndPasswordUseCase = IUseCase<IAuthenticationSignEmailAndPasswordParams, void>
