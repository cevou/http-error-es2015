'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HttpError2 = require('./HttpError');

var _HttpError3 = _interopRequireDefault(_HttpError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTTPVersionNotSupportedError = function (_HttpError) {
  _inherits(HTTPVersionNotSupportedError, _HttpError);

  function HTTPVersionNotSupportedError(message) {
    _classCallCheck(this, HTTPVersionNotSupportedError);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HTTPVersionNotSupportedError).call(this, message));

    _this.code = 505;
    return _this;
  }

  return HTTPVersionNotSupportedError;
}(_HttpError3.default);

exports.default = HTTPVersionNotSupportedError;