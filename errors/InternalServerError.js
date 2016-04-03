import HttpError from './HttpError'

class InternalServerError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 500
  }
}

export default InternalServerError
