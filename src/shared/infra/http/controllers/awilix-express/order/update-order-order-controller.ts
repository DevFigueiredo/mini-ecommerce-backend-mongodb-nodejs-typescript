import { before, PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUpdateOrderUseCase } from '../../../../../protocols/useCases/order/update-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class UpdateOrderController {
  private readonly updateOrderUseCase: IUpdateOrderUseCase
  constructor ({ updateOrderUseCase }: any) {
    this.updateOrderUseCase = updateOrderUseCase
  }

  @PATCH()
  @route('/:orderId')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const order = request.body
    const orderId = request.params.orderId
    const customerId = request.customerId
    const entity = { ...order, customerId }
    const params = { _id: orderId }

    await this.updateOrderUseCase.execute({ entity, params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
