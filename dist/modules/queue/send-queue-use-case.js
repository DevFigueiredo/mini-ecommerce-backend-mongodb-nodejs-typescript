"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendQueueUseCase = void 0;
class SendQueueUseCase {
    constructor({ sqs }) {
        this.sqs = sqs;
    }
    async execute({ objJson, queueURL, delaySeconds }) {
        const message = {
            DelaySeconds: delaySeconds || 10,
            MessageBody: JSON.stringify(objJson),
            QueueUrl: queueURL
        };
        await this.sqs.sendMessage(message).promise();
    }
}
exports.SendQueueUseCase = SendQueueUseCase;
