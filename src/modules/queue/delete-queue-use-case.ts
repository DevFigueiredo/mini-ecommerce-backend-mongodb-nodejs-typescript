import { SQS } from 'aws-sdk'
import { IDeleteQueueUseCase, IDeleteQueueUseCaseParams } from '../../shared/protocols/useCases/queue/delete-queue-use-case'

export class DeleteQueueUseCase implements IDeleteQueueUseCase {
  private readonly sqs: SQS
  constructor ({ sqs }: any) {
    this.sqs = sqs
  }

  async execute ({ queueURL, messageId }: IDeleteQueueUseCaseParams): Promise<void> {
    await this.sqs.deleteMessage({
      QueueUrl: queueURL,
      ReceiptHandle: messageId
    }).promise()
  }
}
