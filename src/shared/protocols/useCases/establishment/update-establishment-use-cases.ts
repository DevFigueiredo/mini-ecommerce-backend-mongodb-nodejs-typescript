import { Establishment } from '../../../domain/Establishment'
import { IUseCase } from '../use-cases'

export interface UpdateEstablishmentUseCaseParams {
  entity?: Establishment
  params?: Pick<Establishment, '_id'>

}

export type IUpdateEstablishmentUseCase = IUseCase<UpdateEstablishmentUseCaseParams, void>
