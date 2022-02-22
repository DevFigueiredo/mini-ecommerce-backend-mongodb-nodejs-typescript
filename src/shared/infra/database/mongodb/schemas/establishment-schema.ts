import * as mongoose from 'mongoose'
import { Establishment } from '../../../../domain/Establishment'
import { generateUUID } from '../../../../helpers/generateUUID'

const EstablishmentSchema = new mongoose.Schema(
  {
  _id: { type: String },
  name: { type: String },
  officialName: { type: String },
  socialName: { type: String },
  type: { type: String },
  description: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  website: { type: String },
  openDate: { type: String },
  closeDate: { type: String },
  keywords: { type: String },
  segment: { type: String },
  cnpj: { type: String },
  imageURL: { type: String },
  imageBase64: { type: String },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, _id: false }
)

export const EstablishmentModel = mongoose.model<Establishment>('Establishment', EstablishmentSchema)