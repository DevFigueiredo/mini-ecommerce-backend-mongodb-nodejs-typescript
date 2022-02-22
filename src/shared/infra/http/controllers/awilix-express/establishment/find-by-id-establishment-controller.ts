import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class FindByIdEstablishmentController {
  private readonly findByIdEstablishmentUseCase: IUseCase<undefined, Partial<Establishment>, Establishment[]>
  constructor ({ findByIdEstablishmentUseCase }: any) {
    this.findByIdEstablishmentUseCase = findByIdEstablishmentUseCase
  }

  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.findByIdEstablishmentUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
