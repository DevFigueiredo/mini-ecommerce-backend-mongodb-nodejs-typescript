
import * as mongoose from 'mongoose'
import { Product } from '../../../../domain/product'

const ProductSchema = new mongoose.Schema(
  {
    _id: { type: String },
    customerId:  { type: String, unique: true },
    establishmentId: {type: String},
    title: {type: String},
    description: {type: String},
    price: {type: Number},
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, _id: false }
)

export const ProductModel = mongoose.model<Product>('Product', ProductSchema)


