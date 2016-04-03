import HttpError from './HttpError'

class HTTPVersionNotSupportedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 505
  }
}

export default HTTPVersionNotSupportedError
