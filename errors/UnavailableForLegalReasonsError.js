import HttpError from './HttpError'

class UnavailableForLegalReasonsError extends HttpError {
  constructor(message) {
    super(message)
    this.code = 451
  }
}

export default UnavailableForLegalReasonsError
