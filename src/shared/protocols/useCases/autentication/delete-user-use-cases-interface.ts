import { Authentication } from '../../../domain/authentication'
import { IUseCase } from '../use-cases'

export interface IAuthenticationDeleteParams {
  params?: Pick<Authentication, 'uid'>
}

export type IAuthenticationDeleteUseCase = IUseCase<IAuthenticationDeleteParams, void>
