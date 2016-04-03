import HttpError from './HttpError'

class BadGatewayError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 502
  }
}

export default BadGatewayError
