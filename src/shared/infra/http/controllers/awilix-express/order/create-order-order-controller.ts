import { before, POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { ICreateOrderUseCase } from '../../../../../protocols/useCases/order/create-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class CreateOrderController {
  private readonly createOrderUseCase: ICreateOrderUseCase
  constructor ({ createOrderUseCase }: any) {
    this.createOrderUseCase = createOrderUseCase
  }

  @POST()
  @route('/create')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = request.body
    await this.createOrderUseCase.execute({ entity: { ...entity, customerId: request.customerId } })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
