import { IUseCase } from '../use-cases'

export interface ISendQueueUseCaseParams {objJson: object, queueURL: string, delaySeconds?: number}
export type ISendQueueUseCase = IUseCase<ISendQueueUseCaseParams, void>
