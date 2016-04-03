import HttpError from './HttpError'

class ForbiddenError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 403
  }
}

export default ForbiddenError
