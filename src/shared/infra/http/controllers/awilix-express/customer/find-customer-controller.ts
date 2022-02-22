import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindCustomersUseCase } from '../../../../../protocols/useCases/customers/find-customer-use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly findCustomersUseCase: IFindCustomersUseCase
  constructor ({ findCustomersUseCase }: any) {
    this.findCustomersUseCase = findCustomersUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const customers = await this.findCustomersUseCase.execute({})
    return response.status(HttpStatusHelper.OK).json(customers)
  }
}
