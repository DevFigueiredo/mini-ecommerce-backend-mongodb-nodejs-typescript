import { before, DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IRemoveProductOrderUseCase } from '../../../../../protocols/useCases/order/remove-product-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class RemoveProductOrderController {
  private readonly removeProductOrderUseCase: IRemoveProductOrderUseCase
  constructor ({ removeProductOrderUseCase }: any) {
    this.removeProductOrderUseCase = removeProductOrderUseCase
  }

  @DELETE()
  @route('/remove-product/:productId')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const params = {
      customerId: request.customerId,
      productId: request.params.productId
    }
    await this.removeProductOrderUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
