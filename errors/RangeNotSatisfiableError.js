import HttpError from './HttpError'

class RangeNotSatisfiableError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 416
  }
}

export default RangeNotSatisfiableError
