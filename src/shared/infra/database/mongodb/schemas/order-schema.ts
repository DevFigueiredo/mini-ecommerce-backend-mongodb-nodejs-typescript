import * as mongoose from 'mongoose'
import { Order } from '../../../../domain/order'

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true },
    customerId:  { type: String, unique: true },
    status: {type: String, enum: ["processing", "approved", "declined"], default: "processing"},
    item: [{
      productId: { type: String, unique: true },
      description: { type: String },
      currency: { type: String },
      totalValue: { type: Number },
      blingorderSended: { type: Boolean }
    }]
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, _id: false }
)

export const OrderModel = mongoose.model<Order>('Order', OrderSchema)