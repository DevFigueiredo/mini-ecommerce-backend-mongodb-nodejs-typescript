import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { ISaveCustomersUseCase } from '../../../../../protocols/useCases/customers/create-customer-use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly saveCustomersUseCase: ISaveCustomersUseCase
  constructor ({ saveCustomersUseCase }: any) {
    this.saveCustomersUseCase = saveCustomersUseCase
  }

  @POST()
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = request.body as Customer
    await this.saveCustomersUseCase.execute({ entity })
    return response.status(HttpStatusHelper.Created).end()
  }
}
