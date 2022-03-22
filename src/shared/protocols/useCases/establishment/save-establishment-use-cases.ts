import { Establishment } from '../../../domain/establishment'
import { IUseCase } from '../use-cases'

export interface SaveEstablishmentUseCaseParams {
  entity?: Establishment
}
export type ISaveCustomersUseCaseResponse = string

export type ISaveEstablishmentUseCase = IUseCase<SaveEstablishmentUseCaseParams, ISaveCustomersUseCaseResponse>
