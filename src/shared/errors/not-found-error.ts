export class NotFoundError extends Error {
  constructor (paramName: string) {
    super('No results were found')
    this.name = 'NotFoundError'
  }
}
