import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindEstablishmentUseCase } from '../../../../../protocols/useCases/establishment/find-establishment-use-cases'

@route('/establishment')
export class FindEstablishmentController {
  private readonly findEstablishmentsUseCase: IFindEstablishmentUseCase
  constructor ({ findEstablishmentsUseCase }: any) {
    this.findEstablishmentsUseCase = findEstablishmentsUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const params = request.query
    const establishments = await this.findEstablishmentsUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
