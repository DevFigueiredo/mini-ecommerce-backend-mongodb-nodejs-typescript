"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiveQueueUseCase = void 0;
class ReceiveQueueUseCase {
    constructor({ sqs }) {
        this.sqs = sqs;
    }
    async execute({ queueURL }) {
        const data = await this.sqs.receiveMessage({
            MaxNumberOfMessages: 1,
            QueueUrl: queueURL
        }).promise();
        const messages = data.Messages;
        return messages;
    }
}
exports.ReceiveQueueUseCase = ReceiveQueueUseCase;
