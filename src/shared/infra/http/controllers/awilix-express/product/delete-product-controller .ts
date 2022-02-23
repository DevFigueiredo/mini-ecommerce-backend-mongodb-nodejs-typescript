import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IDeleteProductUseCase } from '../../../../../protocols/useCases/product/delete-product-use-cases'

@route('/product')
export class DeleteProductController {
  private readonly deleteProductUseCase: IDeleteProductUseCase
  constructor ({ deleteProductUseCase }: any) {
    this.deleteProductUseCase = deleteProductUseCase
  }

  @route('/:id')
  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    await this.deleteProductUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
