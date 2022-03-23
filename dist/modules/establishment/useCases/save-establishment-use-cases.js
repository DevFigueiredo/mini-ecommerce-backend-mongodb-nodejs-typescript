"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveEstablishmentUseCase = void 0;
const generateUUID_1 = require("../../../shared/helpers/generateUUID");
class SaveEstablishmentUseCase {
    constructor({ establishmentRepository, uploadImage }) {
        this.establishmentRepository = establishmentRepository;
        this.uploadImage = uploadImage;
    }
    async execute({ entity }) {
        entity._id = (0, generateUUID_1.generateUUID)();
        await this.uploadImageBase64(entity);
        await this.establishmentRepository.save(entity);
        return entity._id;
    }
    async uploadImageBase64(entity) {
        if (entity.imageBase64) {
            const { imageURL } = await this.uploadImage.uploadImageBase64('establishment', 'establishment-', entity.imageBase64);
            entity.imageURL = imageURL;
        }
        delete entity.imageBase64;
    }
}
exports.SaveEstablishmentUseCase = SaveEstablishmentUseCase;
