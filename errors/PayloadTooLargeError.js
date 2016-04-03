import HttpError from './HttpError'

class PayloadTooLargeError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 413
  }
}

export default PayloadTooLargeError
