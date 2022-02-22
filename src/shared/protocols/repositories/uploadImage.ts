
export interface IUploadImage {
  uploadImageBase64: (
    path: string,
    imageName: string,
    imageBase64: string
  ) => Promise<{ imageURL: string, fileName: string }>

}
