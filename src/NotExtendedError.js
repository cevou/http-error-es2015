import HttpError from './HttpError'

class NotExtendedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 510
  }
}

export default NotExtendedError
