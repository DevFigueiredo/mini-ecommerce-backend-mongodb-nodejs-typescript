
export interface IUseCase<ParamsType, ResponseType> {
  execute: (object: ParamsType) => Promise<ResponseType>
}
