"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQueueUseCase = void 0;
class DeleteQueueUseCase {
    constructor({ sqs }) {
        this.sqs = sqs;
    }
    async execute({ queueURL, messageId }) {
        await this.sqs.deleteMessage({
            QueueUrl: queueURL,
            ReceiptHandle: messageId
        }).promise();
    }
}
exports.DeleteQueueUseCase = DeleteQueueUseCase;
