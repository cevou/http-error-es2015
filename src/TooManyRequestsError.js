import HttpError from './HttpError'

class TooManyRequestsError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 429
  }
}

export default TooManyRequestsError
