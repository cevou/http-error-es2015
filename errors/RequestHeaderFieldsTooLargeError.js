import HttpError from './HttpError'

class RequestHeaderFieldsTooLargeError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 431
  }
}

export default RequestHeaderFieldsTooLargeError
