import { before, GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindEstablishmentUseCase } from '../../../../../protocols/useCases/establishment/find-establishment-use-cases'
import { ensureAuthenticatedMiddleware } from '../../../middlewares/ensure-authenticate'

@route('/establishment')
export class FindEstablishmentController {
  private readonly findEstablishmentsUseCase: IFindEstablishmentUseCase
  constructor ({ findEstablishmentsUseCase }: any) {
    this.findEstablishmentsUseCase = findEstablishmentsUseCase
  }

  @GET()
  @before([ensureAuthenticatedMiddleware])
  async execute (request: Request, response: Response): Promise<Response> {
    const params = request.query
    const establishments = await this.findEstablishmentsUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
