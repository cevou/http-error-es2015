import HttpError from './HttpError'

class NotImplementedError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 501
  }
}

export default NotImplementedError
