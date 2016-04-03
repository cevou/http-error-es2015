import HttpError from './HttpError'

class RequestTimeoutError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 408
  }
}

export default RequestTimeoutError
