// Load the AWS SDK for Node.js
import { container } from '../../../shared/container/'
import { IAddProductOrderUseCase } from '../../../shared/protocols/useCases/order/add-product-order-use-cases-interface'
import { IDeleteQueueUseCase } from '../../../shared/protocols/useCases/queue/delete-queue-use-case'
import { IReceiveQueueUseCase } from '../../../shared/protocols/useCases/queue/receive-queue-use-case'

const queueURL = 'https://sqs.sa-east-1.amazonaws.com/011292373750/add-product-order'

async function receive (): Promise<void> {
  const addProductOrderUseCase: IAddProductOrderUseCase = container.resolve('addProductOrderUseCase')
  const receiveQueueUseCase: IReceiveQueueUseCase = container.resolve('receiveQueueUseCase')
  const deleteQueueUseCase: IDeleteQueueUseCase = container.resolve('deleteQueueUseCase')
  const messages = await receiveQueueUseCase.execute({ queueURL })
  if (!messages) return
  for (const message of messages) {
    const { quantity, productId, customerId } = JSON.parse(message.Body)
    await addProductOrderUseCase.execute({ entity: { quantity, productId }, params: { customerId } })
    await deleteQueueUseCase.execute({ queueURL, messageId: message.ReceiptHandle })

    console.log(`Product ${productId as string} inserted on Order Bag`)
  }
}

void receive()
