
import { IUseCase } from '../use-cases'

export interface IAuthenticationVerifyTokenParams {
  token: string
}

export type IAuthenticationVerifyTokenUseCase = IUseCase<IAuthenticationVerifyTokenParams, void>
