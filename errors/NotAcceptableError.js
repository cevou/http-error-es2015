import HttpError from './HttpError'

class NotAcceptableError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 406
  }
}

export default NotAcceptableError
