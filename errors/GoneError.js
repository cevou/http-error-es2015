import HttpError from './HttpError'

class GoneError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 410
  }
}

export default GoneError
