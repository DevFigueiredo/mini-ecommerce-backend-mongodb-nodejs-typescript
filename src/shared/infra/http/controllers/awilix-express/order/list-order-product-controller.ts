import { before, GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { OrderStatus } from '../../../../../enums/order-status-enum'
import { IListOrderUseCase } from '../../../../../protocols/useCases/order/list-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class ListOrderController {
  private readonly listOrderUseCase: IListOrderUseCase
  constructor ({ listOrderUseCase }: any) {
    this.listOrderUseCase = listOrderUseCase
  }

  @GET()
  @route('/:status/list/')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const params = { status: request.params.status as OrderStatus, customerId: request.customerId }
    const order = await this.listOrderUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(order)
  }
}
