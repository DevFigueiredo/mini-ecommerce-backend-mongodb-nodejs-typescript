import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IFindByIdEstablishmentUseCase } from '../../../../../protocols/useCases/establishment/find-by-id-establishment-use-cases'

@route('/establishment')
export class FindByIdEstablishmentController {
  private readonly findByIdEstablishmentUseCase: IFindByIdEstablishmentUseCase
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
