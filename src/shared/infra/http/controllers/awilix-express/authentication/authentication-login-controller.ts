import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HttpStatusHelper } from '../../../../../enums/http-status-helper'
import { IAuthenticationSignEmailAndPasswordUseCase } from '../../../../../protocols/useCases/autentication/sign-with-email-and-password-use-cases-interface'

@route('/authentication')
export class CreateCustomerController {
  private readonly authenticationSignEmailAndPasswordUseCase: IAuthenticationSignEmailAndPasswordUseCase
  constructor ({ authenticationSignEmailAndPasswordUseCase }: any) {
    this.authenticationSignEmailAndPasswordUseCase = authenticationSignEmailAndPasswordUseCase
  }

  @route('/login')
  @POST()
  async execute (request: Request, response: Response): Promise<Response> {
    const email = request.body.email
    const password = request.body.password
    const authenticated = await this.authenticationSignEmailAndPasswordUseCase.execute({ email, password })
    return response.status(HttpStatusHelper.Created).json(authenticated)
  }
}
