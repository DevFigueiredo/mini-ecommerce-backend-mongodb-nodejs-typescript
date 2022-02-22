import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class CreateEstablishmentController {
  private readonly saveEstablishmentUseCase: IUseCase<Establishment, Partial<Establishment>, void>
  constructor ({ saveEstablishmentUseCase }: any) {
    this.saveEstablishmentUseCase = saveEstablishmentUseCase
  }

  @POST()
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = request.body as Establishment
    await this.saveEstablishmentUseCase.execute({ entity })
    return response.status(HttpStatusHelper.Created).end()
  }
}
