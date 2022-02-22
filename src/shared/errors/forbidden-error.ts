export class ForbiddenError extends Error {
  constructor (paramName: string) {
    super('You are not allowed to do this')
    this.name = 'ForbiddenError'
  }
}
