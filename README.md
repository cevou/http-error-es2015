# http-error-es2015

[![Travis](https://img.shields.io/travis/SamanIO/http-error-es2015.svg?style=flat-square)](https://travis-ci.org/SamanIO/http-error-es2015) [![npm](https://img.shields.io/npm/v/http-error-es2015.svg?style=flat-square)](https://www.npmjs.com/package/http-error-es2015)

A library with ES6 error classes for all HTTP Errors

## Install

```javascript
npm install http-error-es2015
```

## Example

```javascript
import 'babel-polyfill'
import BadRequestError from 'http-error-es6/errors/BadRequestError'

const err = new BadRequestError('message')
```

## List of errors

| Code | Function
|:---  | :---
| 400  | BadRequestError
| 401  | UnauthorizedError
| 402  | PaymentRequiredError
| 403  | ForbiddenError
| 404  | NotFoundError
| 405  | MethodNotAllowedError
| 406  | NotAcceptableError
| 407  | ProxyAuthenticationRequiredError
| 408  | RequestTimeoutError
| 409  | ConflictError
| 410  | GoneError
| 411  | LengthRequiredError
| 412  | PreconditionFailedError
| 413  | PayloadTooLargeError
| 414  | URITooLongError
| 415  | UnsupportedMediaTypeError
| 416  | RangeNotSatisfiableError
| 417  | ExpectationFailedError
| 421  | MisdirectedRequestError
| 422  | UnprocessableEntityError
| 423  | LockedError
| 424  | FailedDependencyError
| 426  | UpgradeRequiredError
| 428  | PreconditionRequiredError
| 429  | TooManyRequestsError
| 431  | RequestHeaderFieldsTooLargeError
| 451  | UnavailableForLegalReasonsError
| 500  | InternalServerError
| 501  | NotImplementedError
| 502  | BadGatewayError
| 503  | ServiceUnavailableError
| 504  | GatewayTimeoutError
| 505  | HTTPVersionNotSupportedError
| 506  | VariantAlsoNegotiatesError
| 507  | InsufficientStorageError
| 508  | LoopDetectedError
| 510  | NotExtendedError
| 511  | NetworkAuthenticationRequiredError

## License

MIT
