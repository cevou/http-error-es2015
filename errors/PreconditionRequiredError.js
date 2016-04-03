import HttpError from './HttpError'

class PreconditionRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 428
  }
}

export default PreconditionRequiredError
