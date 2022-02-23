import { OrderStatus } from '../enums/order-status-enum'
import { OrderItems } from './order-items'

export class Order {
  _id: string
  status: OrderStatus
  customerId: string
  items: OrderItems[]
  totalPrice?: number
  createdAt: Date
  updatedAt: Date
}
