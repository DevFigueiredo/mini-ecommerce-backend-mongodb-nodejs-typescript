import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly updateEstablishmentUseCase: IUseCase<undefined, Partial<Customer>, Customer[]>
  constructor ({ updateEstablishmentUseCase }: any) {
    this.updateEstablishmentUseCase = updateEstablishmentUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const customers = await this.updateEstablishmentUseCase.execute({ params })
    return response.status(HttpStatusHelper.Created).json(customers)
  }
}
