import HttpError from './HttpError'

class NetworkAuthenticationRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 511
  }
}

export default NetworkAuthenticationRequiredError
