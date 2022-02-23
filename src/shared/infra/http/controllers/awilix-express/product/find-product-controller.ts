import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindProductUseCase } from '../../../../../protocols/useCases/product/find-product-use-cases'

@route('/product')
export class CreateProductController {
  private readonly findProductUseCase: IFindProductUseCase
  constructor ({ findProductUseCase }: any) {
    this.findProductUseCase = findProductUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const products = await this.findProductUseCase.execute({})
    return response.status(HttpStatusHelper.OK).json(products)
  }
}
