import { Establishment } from '../../../domain/establishment'
import { IUseCase } from '../use-cases'

export interface UpdateEstablishmentUseCaseParams {
  entity?: Establishment
  params?: Pick<Establishment, '_id'>

}

export type IUpdateEstablishmentUseCase = IUseCase<UpdateEstablishmentUseCaseParams, void>
