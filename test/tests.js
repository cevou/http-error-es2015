import 'babel-polyfill'
import expect from 'expect'
import HttpError from '../src/HttpError'
import BadRequestError from '../src/BadRequestError'
import UnauthorizedError from '../src/UnauthorizedError'
import PaymentRequiredError from '../src/PaymentRequiredError'
import ForbiddenError from '../src/ForbiddenError'
import NotFoundError from '../src/NotFoundError'
import MethodNotAllowedError from '../src/MethodNotAllowedError'
import NotAcceptableError from '../src/NotAcceptableError'
import ProxyAuthenticationRequiredError from '../src/ProxyAuthenticationRequiredError'
import RequestTimeoutError from '../src/RequestTimeoutError'
import ConflictError from '../src/ConflictError'
import GoneError from '../src/GoneError'
import LengthRequiredError from '../src/LengthRequiredError'
import PreconditionFailedError from '../src/PreconditionFailedError'
import PayloadTooLargeError from '../src/PayloadTooLargeError'
import UriTooLongError from '../src/UriTooLongError'
import UnsupportedMediaTypeError from '../src/UnsupportedMediaTypeError'
import RangeNotSatisfiableError from '../src/RangeNotSatisfiableError'
import ExpectationFailedError from '../src/ExpectationFailedError'
import MisdirectedRequestError from '../src/MisdirectedRequestError'
import UnprocessableEntityError from '../src/UnprocessableEntityError'
import LockedError from '../src/LockedError'
import FailedDependencyError from '../src/FailedDependencyError'
import UpgradeRequiredError from '../src/UpgradeRequiredError'
import PreconditionRequiredError from '../src/PreconditionRequiredError'
import TooManyRequestsError from '../src/TooManyRequestsError'
import RequestHeaderFieldsTooLargeError from '../src/RequestHeaderFieldsTooLargeError'
import UnavailableForLegalReasonsError from '../src/UnavailableForLegalReasonsError'
import InternalServerError from '../src/InternalServerError'
import NotImplementedError from '../src/NotImplementedError'
import BadGatewayError from '../src/BadGatewayError'
import ServiceUnavailableError from '../src/ServiceUnavailableError'
import GatewayTimeoutError from '../src/GatewayTimeoutError'
import HttpVersionNotSupportedError from '../src/HttpVersionNotSupportedError'
import VariantAlsoNegotiatesError from '../src/VariantAlsoNegotiatesError'
import InsufficientStorageError from '../src/InsufficientStorageError'
import LoopDetectedError from '../src/LoopDetectedError'
import NotExtendedError from '../src/NotExtendedError'
import NetworkAuthenticationRequiredError from '../src/NetworkAuthenticationRequiredError'

describe('ES2015 HTTP Errors', () => {
  it('Should handle error 400 correctly', () => {
    const err = new BadRequestError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(BadRequestError)
    expect(err.code).toEqual(400)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 401 correctly', () => {
    const err = new UnauthorizedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UnauthorizedError)
    expect(err.code).toEqual(401)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 402 correctly', () => {
    const err = new PaymentRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(PaymentRequiredError)
    expect(err.code).toEqual(402)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 403 correctly', () => {
    const err = new ForbiddenError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(ForbiddenError)
    expect(err.code).toEqual(403)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 404 correctly', () => {
    const err = new NotFoundError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(NotFoundError)
    expect(err.code).toEqual(404)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 405 correctly', () => {
    const err = new MethodNotAllowedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(MethodNotAllowedError)
    expect(err.code).toEqual(405)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 406 correctly', () => {
    const err = new NotAcceptableError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(NotAcceptableError)
    expect(err.code).toEqual(406)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 407 correctly', () => {
    const err = new ProxyAuthenticationRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(ProxyAuthenticationRequiredError)
    expect(err.code).toEqual(407)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 408 correctly', () => {
    const err = new RequestTimeoutError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(RequestTimeoutError)
    expect(err.code).toEqual(408)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 409 correctly', () => {
    const err = new ConflictError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(ConflictError)
    expect(err.code).toEqual(409)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 410 correctly', () => {
    const err = new GoneError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(GoneError)
    expect(err.code).toEqual(410)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 411 correctly', () => {
    const err = new LengthRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(LengthRequiredError)
    expect(err.code).toEqual(411)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 412 correctly', () => {
    const err = new PreconditionFailedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(PreconditionFailedError)
    expect(err.code).toEqual(412)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 413 correctly', () => {
    const err = new PayloadTooLargeError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(PayloadTooLargeError)
    expect(err.code).toEqual(413)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 414 correctly', () => {
    const err = new UriTooLongError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UriTooLongError)
    expect(err.code).toEqual(414)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 415 correctly', () => {
    const err = new UnsupportedMediaTypeError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UnsupportedMediaTypeError)
    expect(err.code).toEqual(415)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 416 correctly', () => {
    const err = new RangeNotSatisfiableError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(RangeNotSatisfiableError)
    expect(err.code).toEqual(416)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 417 correctly', () => {
    const err = new ExpectationFailedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(ExpectationFailedError)
    expect(err.code).toEqual(417)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 421 correctly', () => {
    const err = new MisdirectedRequestError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(MisdirectedRequestError)
    expect(err.code).toEqual(421)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 422 correctly', () => {
    const err = new UnprocessableEntityError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UnprocessableEntityError)
    expect(err.code).toEqual(422)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 423 correctly', () => {
    const err = new LockedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(LockedError)
    expect(err.code).toEqual(423)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 424 correctly', () => {
    const err = new FailedDependencyError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(FailedDependencyError)
    expect(err.code).toEqual(424)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 426 correctly', () => {
    const err = new UpgradeRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UpgradeRequiredError)
    expect(err.code).toEqual(426)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 428 correctly', () => {
    const err = new PreconditionRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(PreconditionRequiredError)
    expect(err.code).toEqual(428)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 429 correctly', () => {
    const err = new TooManyRequestsError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(TooManyRequestsError)
    expect(err.code).toEqual(429)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 431 correctly', () => {
    const err = new RequestHeaderFieldsTooLargeError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(RequestHeaderFieldsTooLargeError)
    expect(err.code).toEqual(431)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 451 correctly', () => {
    const err = new UnavailableForLegalReasonsError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(UnavailableForLegalReasonsError)
    expect(err.code).toEqual(451)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 500 correctly', () => {
    const err = new InternalServerError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(InternalServerError)
    expect(err.code).toEqual(500)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 501 correctly', () => {
    const err = new NotImplementedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(NotImplementedError)
    expect(err.code).toEqual(501)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 502 correctly', () => {
    const err = new BadGatewayError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(BadGatewayError)
    expect(err.code).toEqual(502)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 503 correctly', () => {
    const err = new ServiceUnavailableError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(ServiceUnavailableError)
    expect(err.code).toEqual(503)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 504 correctly', () => {
    const err = new GatewayTimeoutError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(GatewayTimeoutError)
    expect(err.code).toEqual(504)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 505 correctly', () => {
    const err = new HttpVersionNotSupportedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(HttpVersionNotSupportedError)
    expect(err.code).toEqual(505)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 506 correctly', () => {
    const err = new VariantAlsoNegotiatesError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(VariantAlsoNegotiatesError)
    expect(err.code).toEqual(506)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 507 correctly', () => {
    const err = new InsufficientStorageError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(InsufficientStorageError)
    expect(err.code).toEqual(507)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 508 correctly', () => {
    const err = new LoopDetectedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(LoopDetectedError)
    expect(err.code).toEqual(508)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 510 correctly', () => {
    const err = new NotExtendedError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(NotExtendedError)
    expect(err.code).toEqual(510)
    expect(err.message).toEqual('test')
  })

  it('Should handle error 511 correctly', () => {
    const err = new NetworkAuthenticationRequiredError('test')

    expect(err).toBeA(HttpError)
    expect(err).toBeA(NetworkAuthenticationRequiredError)
    expect(err.code).toEqual(511)
    expect(err.message).toEqual('test')
  })
})
