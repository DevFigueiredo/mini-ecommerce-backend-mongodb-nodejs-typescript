import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUpdateCustomerUseCase } from '../../../../../protocols/useCases/customers/update-customer-use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly updateCustomersUseCase: IUpdateCustomerUseCase
  constructor ({ updateCustomersUseCase }: any) {
    this.updateCustomersUseCase = updateCustomersUseCase
  }

  @route('/:id')
  @PATCH()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const entity = request.body
    const customers = await this.updateCustomersUseCase.execute({ params, entity })
    return response.status(HttpStatusHelper.NoContent).json(customers)
  }
}
