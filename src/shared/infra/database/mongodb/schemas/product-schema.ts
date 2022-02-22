
import * as mongoose from 'mongoose'
import { Establishment } from '../../../../domain/Establishment'
import { generateUUID } from '../../../../helpers/generateUUID'

const ProductSchema = new mongoose.Schema(
  {
    _id: { type: String },
    establishmentId: {type: String},
    title: {type: String},
    description: {type: String},
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, _id: false }
)

export const ProductModel = mongoose.model<Establishment>('Product', ProductSchema)