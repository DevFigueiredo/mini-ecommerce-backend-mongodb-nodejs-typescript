import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class UpdateEstablishmentController {
  private readonly updateEstablishmentUseCase: IUseCase<undefined, Partial<Establishment>, Establishment[]>
  constructor ({ updateEstablishmentUseCase }: any) {
    this.updateEstablishmentUseCase = updateEstablishmentUseCase
  }

  @route('/:id')
  @PATCH()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.updateEstablishmentUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.OK).json(establishments)
  }
}
