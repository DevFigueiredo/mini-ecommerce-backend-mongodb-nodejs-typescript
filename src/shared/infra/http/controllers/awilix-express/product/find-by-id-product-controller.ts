import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindByIdProductUseCase } from '../../../../../protocols/useCases/product/find-by-id-product-use-cases'

@route('/product')
export class CreateProductController {
  private readonly findByIdProductUseCase: IFindByIdProductUseCase
  constructor ({ findByIdProductUseCase }: any) {
    this.findByIdProductUseCase = findByIdProductUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const products = await this.findByIdProductUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(products)
  }
}
