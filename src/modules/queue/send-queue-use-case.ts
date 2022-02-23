import { SQS } from 'aws-sdk'
import { ISendQueueUseCase, ISendQueueUseCaseParams } from '../../shared/protocols/useCases/queue/send-queue-use-case'

export class SendQueueUseCase implements ISendQueueUseCase {
  private readonly sqs: SQS
  constructor ({ sqs }: any) {
    this.sqs = sqs
  }

  async execute ({ objJson, queueURL, delaySeconds }: ISendQueueUseCaseParams): Promise<void> {
    const message = {
      DelaySeconds: delaySeconds || 10,
      MessageBody: JSON.stringify(objJson),
      QueueUrl: queueURL
    }
    await this.sqs.sendMessage(message).promise()
  }
}
