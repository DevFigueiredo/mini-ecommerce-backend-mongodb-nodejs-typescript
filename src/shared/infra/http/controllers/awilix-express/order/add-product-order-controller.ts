import { before, POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
// import { IAddProductOrderUseCase } from '../../../../../protocols/useCases/order/add-product-order-use-cases-interface'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'
import 'dotenv/config'
import { ISendQueueUseCase } from '../../../../../protocols/useCases/queue/send-queue-use-case'
@route('/order')
export class AddProductOrderController {
  // private readonly addProductOrderUseCase: IAddProductOrderUseCase
  private readonly sendQueueUseCase: ISendQueueUseCase
  constructor ({ sendQueueUseCase }: any) {
    // this.addProductOrderUseCase = addProductOrderUseCase
    this.sendQueueUseCase = sendQueueUseCase
  }

  @POST()
  @route('/add-product/:productId')
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = { ...request.body, productId: request.params.productId }
    const customerId = request.customerId
    // const params = {
    //   customerId: request.customerId
    // }
    // await this.addProductOrderUseCase.execute({ entity, params })

    await this.sendQueueUseCase.execute({ objJson: { ...entity, customerId }, queueURL: process.env.QUEUE_ADD_PRODUCT })

    return response.status(HttpStatusHelper.NoContent).end()
  }
}
