import HttpError from './HttpError'

class LockedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 423
  }
}

export default LockedError
