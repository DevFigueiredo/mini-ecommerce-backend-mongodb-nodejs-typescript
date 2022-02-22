import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class FindEstablishmentController {
  private readonly findEstablishmentsUseCase: IUseCase<undefined, Partial<Establishment>, undefined>
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
