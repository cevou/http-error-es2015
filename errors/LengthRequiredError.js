import HttpError from './HttpError'

class LengthRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 411
  }
}

export default LengthRequiredError
