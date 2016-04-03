import HttpError from './HttpError'

class InsufficientStorageError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 507
  }
}

export default InsufficientStorageError
