import { before, PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFlushOrderUseCase } from '../../../../../protocols/useCases/order/flush-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class ListOrderController {
  private readonly flushOrderUseCase: IFlushOrderUseCase
  constructor ({ flushOrderUseCase }: any) {
    this.flushOrderUseCase = flushOrderUseCase
  }

  @PATCH()
  @route('/flush')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const params = { customerId: request.customerId }
    await this.flushOrderUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
