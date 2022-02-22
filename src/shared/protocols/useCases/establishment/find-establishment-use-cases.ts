import { Establishment } from '../../../domain/Establishment'
import { IUseCase } from '../use-cases'

export interface FindEstablishmentUseCaseParams {
  params?: Partial<Establishment>
}
export type IFindCustomersUseCaseResponse = Establishment[]

export type IFindEstablishmentUseCase = IUseCase<FindEstablishmentUseCaseParams, IFindCustomersUseCaseResponse>
