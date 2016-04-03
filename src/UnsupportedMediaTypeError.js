import HttpError from './HttpError'

class UnsupportedMediaTypeError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 415
  }
}

export default UnsupportedMediaTypeError
