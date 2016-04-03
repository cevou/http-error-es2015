import HttpError from './HttpError'

class MisdirectedRequestError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 421
  }
}

export default MisdirectedRequestError
