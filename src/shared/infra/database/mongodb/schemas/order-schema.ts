import * as mongoose from 'mongoose'
import { Order } from '../../../../domain/order'

const OrderSchema = new mongoose.Schema(
  {
    _id: { type: String },
    customerId:  { type: String, unique: true },
    status: {type: String, enum: ["bag","processing", "approved", "declined"], default: "bag"},
    items: [{
      productId:{ type: String},
      establishmentId:{ type: String},
      establishmentName:{ type: String},
      title:{ type: String},
      description:{ type: String},
      quantity:{ type: Number},
      price:{ type: Number},
    }]
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, _id: false }
)

export const OrderModel = mongoose.model<Order>('Order', OrderSchema)