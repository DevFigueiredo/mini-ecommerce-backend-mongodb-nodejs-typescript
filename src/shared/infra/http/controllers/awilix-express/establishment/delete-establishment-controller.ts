import { before, DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IDeleteEstablishmentUseCase } from '../../../../../protocols/useCases/establishment/delete-establishment-use-cases'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/establishment')
export class DeleteEstablishmentController {
  private readonly deleteEstablishmentsUseCase: IDeleteEstablishmentUseCase
  constructor ({ deleteEstablishmentsUseCase }: any) {
    this.deleteEstablishmentsUseCase = deleteEstablishmentsUseCase
  }

  @route('/:id')
  @DELETE()
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.deleteEstablishmentsUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.NoContent).json(establishments)
  }
}
