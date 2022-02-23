
import { IUseCase } from '../use-cases'

export interface IAuthenticationSignEmailAndPasswordParams {
  email: string
  password: string
}

export interface IAuthenticationSignEmailAndPasswordResponse {token: string, refreshToken: string, expiresIn: string}

export type IAuthenticationSignEmailAndPasswordUseCase = IUseCase<IAuthenticationSignEmailAndPasswordParams, IAuthenticationSignEmailAndPasswordResponse>
