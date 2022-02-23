import { SQS } from 'aws-sdk'
import { IReceiveQueueUseCaseParams, IReceiveQueueUseCase, IReceiveQueueUseCaseResponse } from '../../shared/protocols/useCases/queue/receive-queue-use-case'

export class ReceiveQueueUseCase implements IReceiveQueueUseCase {
  private readonly sqs: SQS
  constructor ({ sqs }: any) {
    this.sqs = sqs
  }

  async execute ({ queueURL }: IReceiveQueueUseCaseParams): Promise<IReceiveQueueUseCaseResponse> {
    const data = await this.sqs.receiveMessage({
      MaxNumberOfMessages: 1,
      QueueUrl: queueURL
    }).promise()
    const messages = data.Messages
    return messages
  }
}
