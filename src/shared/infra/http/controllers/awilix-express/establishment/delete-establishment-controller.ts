import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Establishment } from '../../../../../domain/establishment'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/establishment')
export class DeleteEstablishmentController {
  private readonly deleteEstablishmentsUseCase: IUseCase<undefined, Partial<Establishment>, Establishment[]>
  constructor ({ deleteEstablishmentsUseCase }: any) {
    this.deleteEstablishmentsUseCase = deleteEstablishmentsUseCase
  }

  @route('/:id')
  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id
    const establishments = await this.deleteEstablishmentsUseCase.execute({ params: { _id } })
    return response.status(HttpStatusHelper.NoContent).json(establishments)
  }
}
