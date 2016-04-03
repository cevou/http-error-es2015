import HttpError from './HttpError'

class URITooLongError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 414
  }
}

export default URITooLongError
