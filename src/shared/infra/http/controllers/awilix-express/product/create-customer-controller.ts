import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Product } from '../../../../../domain/product'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { ISaveProductUseCase } from '../../../../../protocols/useCases/Product/create-Product-use-cases'

@route('/product')
export class CreateProductController {
  private readonly saveProductUseCase: ISaveProductUseCase
  constructor ({ saveProductUseCase }: any) {
    this.saveProductUseCase = saveProductUseCase
  }

  @POST()
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = request.body as Product
    const id = await this.saveProductUseCase.execute({ entity })
    return response.status(HttpStatusHelper.Created).json({ id })
  }
}
