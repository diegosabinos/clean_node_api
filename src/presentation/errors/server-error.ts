export class ServerError extends Error {
  constructor () {
    super('Internal server erorr')
    this.name = 'ServerError'
  }
}
