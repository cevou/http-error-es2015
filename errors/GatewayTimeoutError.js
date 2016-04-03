import HttpError from './HttpError'

class GatewayTimeoutError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 504
  }
}

export default GatewayTimeoutError
