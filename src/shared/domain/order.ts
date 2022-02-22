export class Order {
  _id: string
  orderId: string
  customerId: string
  item: Array<{
    code: string
    description: string
    currency: string
    totalValue: Number
    blingorderSended: Boolean
  }>

  createdAt: Date
  updatedAt: Date
}
