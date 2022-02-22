import { Establishment } from '../../../domain/Establishment'
import { IUseCase } from '../use-cases'

export interface IDeleteEstablishmentUseCaseParams {
  params?: Pick<Establishment, '_id'>
}

export type IDeleteEstablishmentUseCase = IUseCase<IDeleteEstablishmentUseCaseParams, void>
