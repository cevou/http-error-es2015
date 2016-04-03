import HttpError from './HttpError'

class UpgradeRequiredError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 426
  }
}

export default UpgradeRequiredError
