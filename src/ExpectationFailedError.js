import HttpError from './HttpError'

class ExpectationFailedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 417
  }
}

export default ExpectationFailedError
