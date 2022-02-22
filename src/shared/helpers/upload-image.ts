import fs from 'fs'
import { IUploadImage } from '../protocols/repositories/uploadImage'
import { generateUUID } from './generateUUID'
export class UploadImage implements IUploadImage {
  async uploadImageBase64 (
    path: string,
    imageName: string,
    imageBase64: string
  ): Promise<{ imageURL: string, fileName: string }> {
    const typeImage = this.validateTypeImageBase64(imageBase64)
    const base64Data = imageBase64.replace(/^data:image\/png;base64,/, '')

    const pathFile = 'uploads/images/' + path + '/'
    const fileName = `${imageName}${generateUUID()}.${typeImage.type}`
    this.createPath(pathFile)
    fs.writeFileSync(pathFile + fileName, base64Data, 'base64')

    return { imageURL: pathFile + fileName, fileName }
  }

  private createPath (pathFile: string): void {
    const paths = pathFile.split('/')
    if (!fs.existsSync(paths[0])) {
      fs.mkdirSync(paths[0])
    }
    if (!fs.existsSync(paths[0] + '/' + paths[1])) {
      fs.mkdirSync(paths[0] + '/' + paths[1])
    }
    if (!fs.existsSync(paths[0] + '/' + paths[1] + '/' + paths[2])) {
      fs.mkdirSync(paths[0] + '/' + paths[1] + '/' + paths[2])
    }
  }

  private validateTypeImageBase64 (imageBase64: string): {type: string} {
    const imageType = imageBase64.split(',')[0]
    if (imageType === 'data:image/png;base64') {
      return { type: 'png' }
    }
    if (imageType === 'data:image/jpeg;base64') {
      return { type: 'jpeg' }
    }
    if (imageType === 'data:image/jpg;base64') {
      return { type: 'jpg' }
    }
    throw new Error(
      'type imge is not accepted, just send PNG, JPEG ou JPG'
    )
  }
}
