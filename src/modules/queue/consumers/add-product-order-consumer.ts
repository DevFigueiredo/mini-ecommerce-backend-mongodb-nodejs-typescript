// Load the AWS SDK for Node.js
import { container } from '../../shared/container'
import { IAddProductOrderUseCase } from '../../shared/protocols/useCases/order/add-product-order-use-cases-interface'
import { IQueue } from '../protocols/queue-interface'

const queueURL = 'https://sqs.sa-east-1.amazonaws.com/011292373750/add-product-order'

async function receive (): Promise<void> {
  const addProductOrderUseCase: IAddProductOrderUseCase = container.resolve('addProductOrderUseCase')
  const queue: IQueue = container.resolve('queue')
  const messages = await queue.receive(queueURL)
  if (!messages) return
  for (const message of messages) {
    const { quantity, productId, customerId } = JSON.parse(message.Body)
    await addProductOrderUseCase.execute({ entity: { quantity, productId }, params: { customerId } })
    await queue.delete(queueURL, message.ReceiptHandle)

    console.log(`Product ${productId as string} inserted on Order Bag`)
  }
}

void receive()

// await sqs.deleteMessage({
//   QueueUrl: queueURL,
//   ReceiptHandle: data.Messages[0].ReceiptHandle
// }).promise()
