
import { Authentication } from '../../../domain/authentication'
import { IUseCase } from '../use-cases'

export interface IAuthenticationVerifyTokenParams {
  token: string
}
export type IAuthenticationVerifyTokenResponse = Pick<Authentication, 'uid' | 'email'>

export type IAuthenticationVerifyTokenUseCase = IUseCase<IAuthenticationVerifyTokenParams, IAuthenticationVerifyTokenResponse>
