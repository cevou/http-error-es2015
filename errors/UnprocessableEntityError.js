import HttpError from './HttpError'

class UnprocessableEntityError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 422
  }
}

export default UnprocessableEntityError
