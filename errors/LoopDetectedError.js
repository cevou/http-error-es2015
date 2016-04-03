import HttpError from './HttpError'

class LoopDetectedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 508
  }
}

export default LoopDetectedError
