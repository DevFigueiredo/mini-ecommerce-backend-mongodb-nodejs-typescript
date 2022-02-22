import { Establishment } from '../../../domain/Establishment'
import { IUseCase } from '../use-cases'

export interface SaveEstablishmentUseCaseParams {
  entity?: Establishment
}
export type ISaveCustomersUseCaseResponse = string

export type ISaveEstablishmentUseCase = IUseCase<SaveEstablishmentUseCaseParams, ISaveCustomersUseCaseResponse>
