import { before, POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IAddProductOrderUseCase } from '../../../../../protocols/useCases/order/add-product-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/order')
export class AddProductOrderController {
  private readonly addProductOrderUseCase: IAddProductOrderUseCase
  constructor ({ addProductOrderUseCase }: any) {
    this.addProductOrderUseCase = addProductOrderUseCase
  }

  @POST()
  @route('/add-product/:productId')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = { ...request.body, productId: request.params.productId }
    const params = {
      customerId: request.customerId
    }
    await this.addProductOrderUseCase.execute({ entity, params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
