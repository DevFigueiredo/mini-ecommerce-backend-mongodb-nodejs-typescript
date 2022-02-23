import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IDeleteCustomersUseCase } from '../../../../../protocols/useCases/customers/delete-customer-use-cases'

@route('/customer')
export class DeleteCustomerController {
  private readonly deleteCustomersUseCase: IDeleteCustomersUseCase
  constructor ({ deleteCustomersUseCase }: any) {
    this.deleteCustomersUseCase = deleteCustomersUseCase
  }

  @route('/:id')
  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    await this.deleteCustomersUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
