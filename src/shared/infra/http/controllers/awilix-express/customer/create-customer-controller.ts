import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly saveCustomersUseCase: IUseCase<Customer, Partial<Customer>, void>
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
