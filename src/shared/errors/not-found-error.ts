export class NotFoundError extends Error {
  constructor (message?: string) {
    super(message || 'No results were found')
    this.name = 'NotFoundError'
  }
}
