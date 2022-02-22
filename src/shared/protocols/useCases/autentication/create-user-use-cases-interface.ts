import { Authentication } from '../../../domain/authentication'
import { IUseCase } from '../use-cases'

export interface IAuthenticationCreateParams {
  entity?: Omit<Authentication, 'emailVerified'>
  params?: Partial<Authentication>
}
export type IAuthenticationCreateResponse = string

export type IAuthenticationCreateUseCase = IUseCase<IAuthenticationCreateParams, IAuthenticationCreateResponse>
