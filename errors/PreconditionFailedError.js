import HttpError from './HttpError'

class PreconditionFailedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 412
  }
}

export default PreconditionFailedError
