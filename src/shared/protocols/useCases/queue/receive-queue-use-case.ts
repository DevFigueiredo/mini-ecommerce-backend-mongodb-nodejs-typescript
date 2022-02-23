import { SQS } from 'aws-sdk'
import { IUseCase } from '../use-cases'

export interface IReceiveQueueUseCaseParams {queueURL: string}
export type IReceiveQueueUseCaseResponse = SQS.MessageList

export type IReceiveQueueUseCase = IUseCase<IReceiveQueueUseCaseParams, IReceiveQueueUseCaseResponse>
