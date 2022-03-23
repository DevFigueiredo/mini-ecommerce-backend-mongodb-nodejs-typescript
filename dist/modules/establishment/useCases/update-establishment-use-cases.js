"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstablishmentUseCase = void 0;
const not_found_error_1 = require("../../../shared/errors/not-found-error");
class UpdateEstablishmentUseCase {
    constructor({ establishmentRepository, uploadImage }) {
        this.establishmentRepository = establishmentRepository;
        this.uploadImage = uploadImage;
    }
    async execute({ entity, params }) {
        if (!params) {
            throw new not_found_error_1.NotFoundError('Params where to update is required');
        }
        await this.uploadImageBase64(entity);
        await this.establishmentRepository.update(entity, { where: params });
    }
    async uploadImageBase64(entity) {
        if (entity.imageBase64) {
            const { imageURL } = await this.uploadImage.uploadImageBase64('establishment', 'establishment-', entity.imageBase64);
            entity.imageURL = imageURL;
        }
        delete entity.imageBase64;
    }
}
exports.UpdateEstablishmentUseCase = UpdateEstablishmentUseCase;
