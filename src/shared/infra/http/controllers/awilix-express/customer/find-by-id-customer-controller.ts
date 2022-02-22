import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindByIdCustomersUseCase } from '../../../../../protocols/useCases/customers/find-by-id-customer-use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly findByIdCustomerUseCase: IFindByIdCustomersUseCase
  constructor ({ findByIdCustomerUseCase }: any) {
    this.findByIdCustomerUseCase = findByIdCustomerUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const customers = await this.findByIdCustomerUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(customers)
  }
}
