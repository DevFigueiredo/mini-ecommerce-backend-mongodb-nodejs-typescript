import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Customer } from '../../../../../domain/customers'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/customer')
export class CreateCustomerController {
  private readonly findByIdCustomerUseCase: IUseCase<undefined, Partial<Customer>, Customer[]>
  constructor ({ findByIdCustomerUseCase }: any) {
    this.findByIdCustomerUseCase = findByIdCustomerUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const params = { _id }
    const customers = await this.findByIdCustomerUseCase.execute({ params })
    return response.status(HttpStatusHelper.Created).json(customers)
  }
}
