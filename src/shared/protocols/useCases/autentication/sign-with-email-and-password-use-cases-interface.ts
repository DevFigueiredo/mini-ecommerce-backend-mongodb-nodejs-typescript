
import { IUseCase } from '../use-cases'

export interface IAuthenticationSignEmailAndPasswordParams {
  email: string
  password: string
}

export type IAuthenticationSignEmailAndPasswordResponse = string

export type IAuthenticationSignEmailAndPasswordUseCase = IUseCase<IAuthenticationSignEmailAndPasswordParams, IAuthenticationSignEmailAndPasswordResponse>
