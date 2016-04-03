import HttpError from './HttpError'

class FailedDependencyError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 424
  }
}

export default FailedDependencyError
