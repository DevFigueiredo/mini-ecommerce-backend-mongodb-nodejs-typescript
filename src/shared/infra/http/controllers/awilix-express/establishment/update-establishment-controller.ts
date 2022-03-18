import { before, PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUpdateEstablishmentUseCase } from '../../../../../protocols/useCases/establishment/update-establishment-use-cases'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/establishment')
export class UpdateEstablishmentController {
  private readonly updateCustomersUseCase: IUpdateEstablishmentUseCase
  constructor ({ updateCustomersUseCase }: any) {
    this.updateCustomersUseCase = updateCustomersUseCase
  }

  @route('/:id')
  @PATCH()
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.updateCustomersUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
