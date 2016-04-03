import HttpError from './HttpError'

class MethodNotAllowedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 405
  }
}

export default MethodNotAllowedError
