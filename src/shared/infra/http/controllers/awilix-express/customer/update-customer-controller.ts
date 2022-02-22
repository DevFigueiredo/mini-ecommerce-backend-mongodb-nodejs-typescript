import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUpdateCustomerUseCase } from '../../../../../protocols/useCases/customers/update-customer-use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly updateEstablishmentUseCase: IUpdateCustomerUseCase
  constructor ({ updateEstablishmentUseCase }: any) {
    this.updateEstablishmentUseCase = updateEstablishmentUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const customers = await this.updateEstablishmentUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).json(customers)
  }
}
