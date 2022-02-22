
export interface IExecuteUseCase<Body, Param> {
  entity?: Body
  params?: Param
}
export interface IUseCase<Body, Param, Response> {
  execute: (object: IExecuteUseCase<Body, Param>) => Promise<Response>
}
