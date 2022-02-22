
import { Authentication } from '../../../domain/authentication'
import { IUseCase } from '../use-cases'

export interface IAuthenticationUpdateParams {
  entity: Partial<Authentication>
  params?: Pick<Authentication, 'uid'>
}

export type IAuthenticationUpdateUseCase = IUseCase<IAuthenticationUpdateParams, void>
