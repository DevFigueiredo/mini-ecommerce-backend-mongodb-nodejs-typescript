"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = void 0;
const fs_1 = __importDefault(require("fs"));
const generateUUID_1 = require("./generateUUID");
class UploadImage {
    async uploadImageBase64(path, imageName, imageBase64) {
        const typeImage = this.validateTypeImageBase64(imageBase64);
        const base64Data = imageBase64.replace(/^data:image\/png;base64,/, '');
        const pathFile = 'uploads/images/' + path + '/';
        const fileName = `${imageName}${(0, generateUUID_1.generateUUID)()}.${typeImage.type}`;
        this.createPath(pathFile);
        fs_1.default.writeFileSync(pathFile + fileName, base64Data, 'base64');
        return { imageURL: pathFile + fileName, fileName };
    }
    createPath(pathFile) {
        const paths = pathFile.split('/');
        if (!fs_1.default.existsSync(paths[0])) {
            fs_1.default.mkdirSync(paths[0]);
        }
        if (!fs_1.default.existsSync(paths[0] + '/' + paths[1])) {
            fs_1.default.mkdirSync(paths[0] + '/' + paths[1]);
        }
        if (!fs_1.default.existsSync(paths[0] + '/' + paths[1] + '/' + paths[2])) {
            fs_1.default.mkdirSync(paths[0] + '/' + paths[1] + '/' + paths[2]);
        }
    }
    validateTypeImageBase64(imageBase64) {
        const imageType = imageBase64.split(',')[0];
        if (imageType === 'data:image/png;base64') {
            return { type: 'png' };
        }
        if (imageType === 'data:image/jpeg;base64') {
            return { type: 'jpeg' };
        }
        if (imageType === 'data:image/jpg;base64') {
            return { type: 'jpg' };
        }
        throw new Error('type imge is not accepted, just send PNG, JPEG ou JPG');
    }
}
exports.UploadImage = UploadImage;
