export class Establishment {
  _id?: string
  name!: string
  officialName!: string
  socialName!: string
  type!: string
  description!: string
  email!: string
  phoneNumber!: string
  website!: string
  openDate!: string
  closeDate!: string
  keywords!: string
  segment!: string
  cnpj!: string
  imageURL?: string
  imageBase64?: string
  createdAt!: Date
  updatedAt!: Date
}
