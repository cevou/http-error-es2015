import HttpError from './HttpError'

class ProxyAuthenticationRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 407
  }
}

export default ProxyAuthenticationRequiredError
