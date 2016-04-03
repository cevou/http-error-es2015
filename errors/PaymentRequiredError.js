import HttpError from './HttpError'

class PaymentRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 402
  }
}

export default PaymentRequiredError
