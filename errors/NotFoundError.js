import HttpError from './HttpError'

class NotFoundError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 404
  }
}

export default NotFoundError
