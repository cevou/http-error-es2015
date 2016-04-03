import HttpError from './HttpError'

class VariantAlsoNegotiatesError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 506
  }
}

export default VariantAlsoNegotiatesError
