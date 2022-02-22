import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class UpdateEstablishmentController {
  private readonly updateCustomersUseCase: IUseCase<undefined, Partial<Establishment>, Establishment[]>
  constructor ({ updateCustomersUseCase }: any) {
    this.updateCustomersUseCase = updateCustomersUseCase
  }

  @route('/:id')
  @PATCH()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.updateCustomersUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
