import HttpError from './HttpError'

class ConflictError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 409
  }
}

export default ConflictError
