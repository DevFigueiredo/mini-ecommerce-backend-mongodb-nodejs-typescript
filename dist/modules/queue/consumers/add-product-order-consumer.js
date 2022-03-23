"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("../../../shared/container/");
const queueURL = 'https://sqs.sa-east-1.amazonaws.com/011292373750/add-product-order';
async function receive() {
    const addProductOrderUseCase = container_1.container.resolve('addProductOrderUseCase');
    const receiveQueueUseCase = container_1.container.resolve('receiveQueueUseCase');
    const deleteQueueUseCase = container_1.container.resolve('deleteQueueUseCase');
    const messages = await receiveQueueUseCase.execute({ queueURL });
    if (!messages)
        return;
    for (const message of messages) {
        const { quantity, productId, customerId } = JSON.parse(message.Body);
        await addProductOrderUseCase.execute({ entity: { quantity, productId }, params: { customerId } });
        await deleteQueueUseCase.execute({ queueURL, messageId: message.ReceiptHandle });
        console.log(`Product ${productId} inserted on Order Bag`);
    }
}
void receive();
