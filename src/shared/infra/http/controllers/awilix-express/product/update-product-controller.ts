import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUpdateProductUseCase } from '../../../../../protocols/useCases/product/update-product-use-cases'

@route('/product')
export class CreateProductController {
  private readonly updateProductUseCase: IUpdateProductUseCase
  constructor ({ updateProductUseCase }: any) {
    this.updateProductUseCase = updateProductUseCase
  }

  @route('/:id')
  @PATCH()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const entity = request.body
    await this.updateProductUseCase.execute({ params, entity })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
