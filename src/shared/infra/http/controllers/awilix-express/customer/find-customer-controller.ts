import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly findCustomersUseCase: IUseCase<undefined, Partial<Customer>, Customer[]>
  constructor ({ findCustomersUseCase }: any) {
    this.findCustomersUseCase = findCustomersUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const customers = await this.findCustomersUseCase.execute({})
    return response.status(HttpStatusHelper.OK).json(customers)
  }
}
