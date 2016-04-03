import HttpError from './HttpError'

class ServiceUnavailableError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 503
  }
}

export default ServiceUnavailableError
