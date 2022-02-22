import * as mongoose from 'mongoose'
import { Establishment } from '../../../../domain/Establishment'
import { generateUUID } from '../../../../helpers/generateUUID'

const EstablishmentSchema = new mongoose.Schema(
  {
    _id: { type: String, default: generateUUID() },
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    cpf: {type: String},
    rg: {type: String},
    gender: {type: String, enum: ["owman", "men", "other"], default: "other"},
    birthDate: {type: Date},
    phoneNumber: {type: String},
    postalCode: {type: String},
    country: {type: String},
    state: {type: String},
    city: {type: String},
    publicPlace: {type: String},
    number: {type: String},
    district: {type: String},
    supplement: {type: String},
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, _id: false }
)

export const EstablishmentModel = mongoose.model<Establishment>('Establishment', EstablishmentSchema)