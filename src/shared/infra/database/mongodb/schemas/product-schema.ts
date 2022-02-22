import * as mongoose from 'mongoose'
import { Product } from '../../../../domain/product'

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String },
    productId: { type: String },
    establishmentId:  { type: String },
    title:  { type: String },
    description:  { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, _id: false }
)

export const ProductModel = mongoose.model<Product>('Product', ProductSchema)