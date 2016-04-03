import HttpError from './HttpError'

class BadRequestError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 400
  }
}

export default BadRequestError
