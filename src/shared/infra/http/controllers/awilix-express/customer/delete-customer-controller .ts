import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/customer')
export class DeleteCustomerController {
  private readonly deleteCustomersUseCase: IUseCase<undefined, Partial<Customer>, Customer[]>
  constructor ({ deleteCustomersUseCase }: any) {
    this.deleteCustomersUseCase = deleteCustomersUseCase
  }

  @route('/:id')
  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const customers = await this.deleteCustomersUseCase.execute({ params })
    return response.status(HttpStatusHelper.NoContent).json(customers)
  }
}
