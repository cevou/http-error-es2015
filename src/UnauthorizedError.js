import HttpError from './HttpError'

class UnauthorizedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 401
  }
}

export default UnauthorizedError
