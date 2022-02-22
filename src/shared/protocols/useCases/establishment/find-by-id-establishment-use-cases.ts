import { Establishment } from '../../../domain/Establishment'
import { IUseCase } from '../use-cases'

export interface FindByIdEstablishmentUseCaseParams {
  params?: Pick<Establishment, '_id'>
}
export type IFindByIdEstablishmentUseCaseResponse = Establishment

export type IFindByIdEstablishmentUseCase = IUseCase<FindByIdEstablishmentUseCaseParams, IFindByIdEstablishmentUseCaseResponse>
