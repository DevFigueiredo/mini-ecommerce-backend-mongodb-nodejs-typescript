import { IUseCase } from '../use-cases'

export interface IDeleteQueueUseCaseParams {queueURL: string, messageId: string}
export type IDeleteQueueUseCase = IUseCase<IDeleteQueueUseCaseParams, void>
