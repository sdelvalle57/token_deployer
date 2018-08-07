module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_numeral__);


function formatNumber(value) {
  return __WEBPACK_IMPORTED_MODULE_0_numeral___default()(value).format('0,0');
}

function isAddressValid(address) {
  var addressRE = /^0x[a-fA-F0-9]{40}$/;
  return address.match(addressRE);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  formatNumber: formatNumber,
  isAddressValid: isAddressValid
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
throw new Error("Cannot find module \"../ethereum/api/web3\"");
throw new Error("Cannot find module \"../ethereum/api/web3Socket\"");
throw new Error("Cannot find module \"../ethereum/api/token\"");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* reading functions */

function getSummary(_x, _x2) {
  return _getSummary.apply(this, arguments);
}
/* Methods for BasicToken */


function _getSummary() {
  _getSummary = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(tokenAddress, network) {
    var summary, token;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            summary = {};
            _context.prev = 1;
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket___default()(network));
            _context.next = 5;
            return token.methods.name().call();

          case 5:
            summary['name'] = _context.sent;
            _context.next = 8;
            return token.methods.symbol().call();

          case 8:
            summary['symbol'] = _context.sent;
            _context.next = 11;
            return token.methods.decimals().call();

          case 11:
            summary['decimals'] = _context.sent;
            _context.next = 14;
            return token.methods.totalSupply().call();

          case 14:
            summary['totalSupply'] = _context.sent;
            _context.next = 17;
            return token.methods.owner().call();

          case 17:
            summary['owner'] = _context.sent;
            _context.next = 22;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);

          case 22:
            return _context.abrupt("return", summary);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 20]]);
  }));
  return _getSummary.apply(this, arguments);
}

function totalSupply(_x3) {
  return _totalSupply.apply(this, arguments);
}

function _totalSupply() {
  _totalSupply = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(tokenAddress) {
    var token, totalSupply;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket___default()(network));
            _context2.next = 3;
            return token.methods.totalSupply().call();

          case 3:
            totalSupply = _context2.sent;
            return _context2.abrupt("return", totalSupply);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _totalSupply.apply(this, arguments);
}

function balanceOf(_x4, _x5, _x6) {
  return _balanceOf.apply(this, arguments);
}

function _balanceOf() {
  _balanceOf = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(tokenAddress, who, network) {
    var token, balance;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket___default()(network));
            _context3.next = 3;
            return token.methods.balanceOf(who).call();

          case 3:
            balance = _context3.sent;
            return _context3.abrupt("return", balance);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _balanceOf.apply(this, arguments);
}

function transfer(_x7, _x8, _x9) {
  return _transfer.apply(this, arguments);
}
/*Methods for StandardToken */


function _transfer() {
  _transfer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(tokenAddress, to, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            value = convertToWei(value);
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a);
            method = token.methods.transfer(to, value);
            _context4.next = 5;
            return sendTx(method);

          case 5:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _transfer.apply(this, arguments);
}

function allowance(_x10, _x11, _x12, _x13) {
  return _allowance.apply(this, arguments);
}

function _allowance() {
  _allowance = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(tokenAddress, owner, spender, network) {
    var token, allowance;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket___default()(network));
            _context5.next = 3;
            return token.methods.allowance(owner, spender).call();

          case 3:
            allowance = _context5.sent;
            return _context5.abrupt("return", allowance);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _allowance.apply(this, arguments);
}

function approve(_x14, _x15, _x16) {
  return _approve.apply(this, arguments);
}

function _approve() {
  _approve = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(tokenAddress, spender, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            value = convertToWei(value);
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a);
            method = token.methods.approve(spender, value);
            _context6.next = 5;
            return sendTx(method);

          case 5:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _approve.apply(this, arguments);
}

function increaseApproval(_x17, _x18, _x19) {
  return _increaseApproval.apply(this, arguments);
}

function _increaseApproval() {
  _increaseApproval = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(tokenAddress, spender, addedValue) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            addedValue = convertToWei(addedValue);
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a);
            method = token.methods.increaseApproval(spender, addedValue);
            _context7.next = 5;
            return sendTx(method);

          case 5:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _increaseApproval.apply(this, arguments);
}

function decreaseApproval(_x20, _x21, _x22) {
  return _decreaseApproval.apply(this, arguments);
}

function _decreaseApproval() {
  _decreaseApproval = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(tokenAddress, spender, subtractedValue) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            subtractedValue = convertToWei(subtractedValue);
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a);
            method = token.methods.decreaseApproval(spender, subtractedValue);
            _context8.next = 5;
            return sendTx(method);

          case 5:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _decreaseApproval.apply(this, arguments);
}

function transferFrom(_x23, _x24, _x25, _x26) {
  return _transferFrom.apply(this, arguments);
}

function _transferFrom() {
  _transferFrom = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9(tokenAddress, from, to, value) {
    var token, method, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            value = convertToWei(value);
            token = __WEBPACK_IMPORTED_MODULE_3__ethereum_api_token___default()(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a);
            method = token.methods.transferFrom(from, to, value);
            _context9.next = 5;
            return sendTx(method);

          case 5:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _transferFrom.apply(this, arguments);
}

function sendTx(_x27) {
  return _sendTx.apply(this, arguments);
}

function _sendTx() {
  _sendTx = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee10(method) {
    var response, accounts, tx;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            response = {
              error: true,
              message: ""
            };
            _context10.prev = 1;
            _context10.next = 4;
            return getAccounts();

          case 4:
            accounts = _context10.sent;
            _context10.next = 7;
            return method.send({
              from: accounts[0]
            });

          case 7:
            tx = _context10.sent;
            response.error = false;
            response.message = tx.transactionHash;
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](1);
            response.message = _context10.t0.message.split("\n")[0];

          case 15:
            return _context10.abrupt("return", response);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[1, 12]]);
  }));
  return _sendTx.apply(this, arguments);
}

function getAccounts() {
  return _getAccounts.apply(this, arguments);
}

function _getAccounts() {
  _getAccounts = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee11() {
    var accounts;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a.eth.getAccounts();

          case 2:
            accounts = _context11.sent;
            return _context11.abrupt("return", accounts);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _getAccounts.apply(this, arguments);
}

function convertToEther(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a.utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3___default.a.utils.toWei(value);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  totalSupply: totalSupply,
  balanceOf: balanceOf,
  transfer: transfer,
  getSummary: getSummary,
  convertToEther: convertToEther,
  getAccounts: getAccounts,
  allowance: allowance,
  approve: approve,
  increaseApproval: increaseApproval,
  decreaseApproval: decreaseApproval,
  sendTx: sendTx,
  transferFrom: transferFrom
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/semantic/dist/semantic.min.css"
  })), props.children);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(8)();

routes.add('./', '/index').add('/token/view/:tokenAddress/:network', '/token/view');
module.exports = routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(2);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(5);

// EXTERNAL MODULE: ./helpers/apiToken.js
var apiToken = __webpack_require__(4);

// EXTERNAL MODULE: ./helpers/solver.js
var solver = __webpack_require__(3);

// CONCATENATED MODULE: ./components/BasicToken.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BasicToken_BasicToken =
/*#__PURE__*/
function (_Component) {
  _inherits(BasicToken, _Component);

  function BasicToken() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BasicToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BasicToken.__proto__ || Object.getPrototypeOf(BasicToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        requests: {
          'balanceOf': 1,
          'transfer': 2
        },
        balance: {
          'who': '',
          'response': ''
        },
        transfer: {
          'to': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          }
        },
        dimmerActive: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(typeOfRequest) {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, requests, tokenAddress, balance, network, transfer, transferValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, requests = _this$state.requests, tokenAddress = _this$state.tokenAddress, balance = _this$state.balance, network = _this$state.network, transfer = _this$state.transfer;
                      _context.t0 = typeOfRequest;
                      _context.next = _context.t0 === requests.balanceOf ? 5 : _context.t0 === requests.transfer ? 10 : 26;
                      break;

                    case 5:
                      _context.next = 7;
                      return apiToken["a" /* default */].balanceOf(tokenAddress, balance.who, network);

                    case 7:
                      balance.response = _context.sent;

                      _this.setState({
                        balance: balance
                      });

                      return _context.abrupt("break", 26);

                    case 10:
                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 16;
                        break;
                      }

                      transfer.response.message = network.message;
                      transfer.response.ok = false;

                      _this.setState({
                        transfer: transfer
                      });

                      _context.next = 25;
                      break;

                    case 16:
                      if (!(transfer.to != "" && transfer.value > 0)) {
                        _context.next = 25;
                        break;
                      }

                      transfer.response.message = '';

                      _this.setState({
                        transfer: transfer,
                        dimmerActive: true
                      });

                      _context.next = 21;
                      return apiToken["a" /* default */].transfer(tokenAddress, transfer.to, transfer.value);

                    case 21:
                      transferValue = _context.sent;
                      transfer.response.ok = !transferValue.error;
                      transfer.response.message = transferValue.message;

                      _this.setState({
                        dimmerActive: false,
                        transfer: transfer
                      });

                    case 25:
                      return _context.abrupt("break", 26);

                    case 26:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  _createClass(BasicToken, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(request) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(), this.renderRibbon(request));
    }
  }, {
    key: "renderResponse",
    value: function renderResponse() {
      var _state = this.state,
          transfer = _state.transfer,
          network = _state.network;

      if (!transfer.response.ok && transfer.response.message != '') {
        transfer.response.message = transfer.response.message.length > 80 ? transfer.response.message.slice(0, 80) : transfer.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, transfer.response.message);
      } else if (transfer.response.ok) {
        var url = network == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + transfer.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, transfer.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon(request) {
      var dimmerActive = this.state.dimmerActive;
      var showHide = dimmerActive ? "hide" : "show";
      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(request),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
    /* Forms */

  }, {
    key: "renderCheckBalancesForm",
    value: function renderCheckBalancesForm() {
      var _this2 = this;

      var _state2 = this.state,
          requests = _state2.requests,
          balance = _state2.balance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        onSubmit: this.onSubmit(requests.balanceOf)
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          balance.who = event.target.value;

          _this2.setState({
            balance: balance
          });
        },
        placeholder: "0x..."
      })));
    }
  }, {
    key: "renderTransferForm",
    value: function renderTransferForm() {
      var _this3 = this;

      var _state3 = this.state,
          summary = _state3.summary,
          transfer = _state3.transfer;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transfer.to = event.target.value;

          _this3.setState({
            transfer: transfer
          });
        },
        placeholder: "0x... address of beneficiary"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transfer.value = event.target.value;

          _this3.setState({
            transfer: transfer
          });
        },
        placeholder: "amount to send"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
    /* Principal rendering */

  }, {
    key: "renderCheckBalanceCard",
    value: function renderCheckBalanceCard() {
      var _state4 = this.state,
          summary = _state4.summary,
          balance = _state4.balance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Check balance of address "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderCheckBalancesForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true
      }, balance.response != "" ? solver["a" /* default */].formatNumber(apiToken["a" /* default */].convertToEther(balance.response)) + " " + summary.symbol + "s" : ""));
    }
  }, {
    key: "renderTransferCard",
    value: function renderTransferCard() {
      var _state5 = this.state,
          requests = _state5.requests,
          dimmerActive = _state5.dimmerActive,
          transfer = _state5.transfer;
      var metaClass = !transfer.response.ok && transfer.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Transfer "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderTransferForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(requests.transfer)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: dimmerActive
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "render",
    value: function render() {
      var _state6 = this.state,
          tokenAddress = _state6.tokenAddress,
          summary = _state6.summary;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards",
          id: "basicTokenCards"
        }, this.renderCheckBalanceCard(), this.renderTransferCard()))));
      }

      return null;
    }
  }]);

  return BasicToken;
}(external__react_["Component"]);

/* harmony default export */ var components_BasicToken = (BasicToken_BasicToken);
// CONCATENATED MODULE: ./components/StandardToken.js


function StandardToken__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StandardToken__typeof = function _typeof(obj) { return typeof obj; }; } else { StandardToken__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StandardToken__typeof(obj); }

function StandardToken__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function StandardToken__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StandardToken__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StandardToken__createClass(Constructor, protoProps, staticProps) { if (protoProps) StandardToken__defineProperties(Constructor.prototype, protoProps); if (staticProps) StandardToken__defineProperties(Constructor, staticProps); return Constructor; }

function StandardToken__possibleConstructorReturn(self, call) { if (call && (StandardToken__typeof(call) === "object" || typeof call === "function")) { return call; } return StandardToken__assertThisInitialized(self); }

function StandardToken__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StandardToken__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var StandardToken_StandardToken =
/*#__PURE__*/
function (_Component) {
  StandardToken__inherits(StandardToken, _Component);

  function StandardToken() {
    var _ref;

    var _temp, _this;

    StandardToken__classCallCheck(this, StandardToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return StandardToken__possibleConstructorReturn(_this, (_temp = _this = StandardToken__possibleConstructorReturn(this, (_ref = StandardToken.__proto__ || Object.getPrototypeOf(StandardToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(StandardToken__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.tokenAddress,
        summary: _this.props.summary,
        network: _this.props.network,
        allowance: {
          'spender': '',
          'owner': '',
          'response': ''
        },
        approve: {
          'spender': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        },
        increaseApproval: {
          'spender': '',
          'addedValue': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        },
        decreaseApproval: {
          'spender': '',
          'subtractedValue': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        },
        transferFrom: {
          'from': '',
          'to': '',
          'value': '',
          'response': {
            'ok': false,
            'message': ''
          },
          'dimmer': false
        },
        requests: {
          'allowance': 1,
          'approve': 2,
          'increaseApproval': 3,
          'decreaseApproval': 4,
          'transferFrom': 5
        }
      }
    }), Object.defineProperty(StandardToken__assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(typeOfRequest) {
        return (
          /*#__PURE__*/
          function () {
            var _ref2 = StandardToken__asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(event) {
              var _this$state, requests, tokenAddress, allowance, approve, network, increaseApproval, decreaseApproval, transferFrom, approveValue, increaseApprovalValue, decreaseApprovalValue, transferFromlValue;

              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      event.preventDefault();
                      _this$state = _this.state, requests = _this$state.requests, tokenAddress = _this$state.tokenAddress, allowance = _this$state.allowance, approve = _this$state.approve, network = _this$state.network, increaseApproval = _this$state.increaseApproval, decreaseApproval = _this$state.decreaseApproval, transferFrom = _this$state.transferFrom;
                      _context.t0 = typeOfRequest;
                      _context.next = _context.t0 === requests.allowance ? 5 : _context.t0 === requests.approve ? 10 : _context.t0 === requests.increaseApproval ? 28 : _context.t0 === requests.decreaseApproval ? 46 : _context.t0 === requests.transferFrom ? 64 : 82;
                      break;

                    case 5:
                      _context.next = 7;
                      return apiToken["a" /* default */].allowance(tokenAddress, allowance.owner, allowance.spender, network);

                    case 7:
                      allowance.response = _context.sent;

                      _this.setState({
                        allowance: allowance
                      });

                      return _context.abrupt("break", 82);

                    case 10:
                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 16;
                        break;
                      }

                      approve.response.message = network.message;
                      approve.response.ok = false;

                      _this.setState({
                        approve: approve
                      });

                      _context.next = 27;
                      break;

                    case 16:
                      if (!(approve.spender != "" && approve.value > 0)) {
                        _context.next = 27;
                        break;
                      }

                      approve.response.message = '';
                      approve.dimmer = true;

                      _this.setState({
                        approve: approve
                      });

                      _context.next = 22;
                      return apiToken["a" /* default */].approve(tokenAddress, approve.spender, approve.value);

                    case 22:
                      approveValue = _context.sent;
                      approve.response.ok = !approveValue.error;
                      approve.response.message = approveValue.message;
                      approve.dimmer = false;

                      _this.setState({
                        approve: approve
                      });

                    case 27:
                      return _context.abrupt("break", 82);

                    case 28:
                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 34;
                        break;
                      }

                      increaseApproval.response.message = network.message;
                      increaseApproval.response.ok = false;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                      _context.next = 45;
                      break;

                    case 34:
                      if (!(increaseApproval.spender != "" && increaseApproval.addedValue > 0)) {
                        _context.next = 45;
                        break;
                      }

                      increaseApproval.response.message = '';
                      increaseApproval.dimmer = true;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                      _context.next = 40;
                      return apiToken["a" /* default */].increaseApproval(tokenAddress, increaseApproval.spender, increaseApproval.addedValue);

                    case 40:
                      increaseApprovalValue = _context.sent;
                      increaseApproval.response.ok = !increaseApprovalValue.error;
                      increaseApproval.response.message = increaseApprovalValue.message;
                      increaseApproval.dimmer = false;

                      _this.setState({
                        increaseApproval: increaseApproval
                      });

                    case 45:
                      return _context.abrupt("break", 82);

                    case 46:
                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 52;
                        break;
                      }

                      decreaseApproval.response.message = network.message;
                      decreaseApproval.response.ok = false;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                      _context.next = 63;
                      break;

                    case 52:
                      if (!(decreaseApproval.spender != "" && decreaseApproval.subtractedValue > 0)) {
                        _context.next = 63;
                        break;
                      }

                      decreaseApproval.response.message = '';
                      decreaseApproval.dimmer = true;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                      _context.next = 58;
                      return apiToken["a" /* default */].decreaseApproval(tokenAddress, decreaseApproval.spender, decreaseApproval.subtractedValue);

                    case 58:
                      decreaseApprovalValue = _context.sent;
                      decreaseApproval.response.ok = !decreaseApprovalValue.error;
                      decreaseApproval.response.message = decreaseApprovalValue.message;
                      decreaseApproval.dimmer = false;

                      _this.setState({
                        decreaseApproval: decreaseApproval
                      });

                    case 63:
                      return _context.abrupt("break", 82);

                    case 64:
                      if (!(network.networkNotSet || network.providerNotSet || network.notLogged)) {
                        _context.next = 70;
                        break;
                      }

                      transferFrom.response.message = network.message;
                      transferFrom.response.ok = false;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                      _context.next = 81;
                      break;

                    case 70:
                      if (!(transferFrom.from != "" && transferFrom.to != "" && transferFrom.value > 0)) {
                        _context.next = 81;
                        break;
                      }

                      transferFrom.response.message = '';
                      transferFrom.dimmer = true;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                      _context.next = 76;
                      return apiToken["a" /* default */].transferFrom(tokenAddress, transferFrom.from, transferFrom.to, transferFrom.value);

                    case 76:
                      transferFromlValue = _context.sent;
                      transferFrom.response.ok = !transferFromlValue.error;
                      transferFrom.response.message = transferFromlValue.message;
                      transferFrom.dimmer = false;

                      _this.setState({
                        transferFrom: transferFrom
                      });

                    case 81:
                      return _context.abrupt("break", 82);

                    case 82:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        );
      }
    }), _temp));
  }

  StandardToken__createClass(StandardToken, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        tokenAddress: nextProps.tokenAddress,
        summary: nextProps.summary,
        network: nextProps.network
      });
    }
  }, {
    key: "renderMeta",
    value: function renderMeta(request, method) {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
        className: "contRibbon"
      }, this.renderResponse(method), this.renderRibbon(request));
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon(request) {
      var requests = this.state.requests;
      var showHide = "hide";

      switch (request) {
        case requests.approve:
          var approve = this.state.approve;
          showHide = approve.dimmer ? "hide" : "show";
          break;

        case requests.increaseApproval:
          var increaseApproval = this.state.increaseApproval;
          showHide = increaseApproval.dimmer ? "hide" : "show";
          break;

        case requests.decreaseApproval:
          var decreaseApproval = this.state.decreaseApproval;
          showHide = decreaseApproval.dimmer ? "hide" : "show";
          break;

        case requests.transferFrom:
          var transferFrom = this.state.transferFrom;
          showHide = transferFrom.dimmer ? "hide" : "show";
          break;
      }

      return external__react__default.a.createElement(external__semantic_ui_react_["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(request),
        as: "a",
        color: "blue",
        ribbon: "right"
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse red"
        }, method.response.message);
      } else if (method.response.ok) {
        var url = network == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse normal"
        }, external__react__default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
          className: "contResponse"
        });
      }
    }
    /* Forms */

  }, {
    key: "renderAllowanceForm",
    value: function renderAllowanceForm() {
      var _this2 = this;

      var _state = this.state,
          requests = _state.requests,
          allowance = _state.allowance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        onSubmit: this.onSubmit(requests.allowance)
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          allowance.owner = event.target.value;

          _this2.setState({
            allowance: allowance
          });
        },
        placeholder: "0x... address of owner"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          allowance.spender = event.target.value;

          _this2.setState({
            allowance: allowance
          });
        },
        placeholder: "0x... address of spender"
      })));
    }
  }, {
    key: "renderApproveForm",
    value: function renderApproveForm() {
      var _this3 = this;

      var _state2 = this.state,
          summary = _state2.summary,
          approve = _state2.approve;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          approve.spender = event.target.value;

          _this3.setState({
            approve: approve
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          approve.value = event.target.value;

          _this3.setState({
            approve: approve
          });
        },
        placeholder: "amount to approve"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderIncreaseApprovalForm",
    value: function renderIncreaseApprovalForm() {
      var _this4 = this;

      var _state3 = this.state,
          summary = _state3.summary,
          increaseApproval = _state3.increaseApproval;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          increaseApproval.spender = event.target.value;

          _this4.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          increaseApproval.addedValue = event.target.value;

          _this4.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "amount to increase"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderDecreaseApprovalForm",
    value: function renderDecreaseApprovalForm() {
      var _this5 = this;

      var _state4 = this.state,
          summary = _state4.summary,
          decreaseApproval = _state4.decreaseApproval;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          decreaseApproval.spender = event.target.value;

          _this5.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "0x... address of spender"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          decreaseApproval.subtractedValue = event.target.value;

          _this5.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "amount to decrease"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderTransferFromForm",
    value: function renderTransferFromForm() {
      var _this6 = this;

      var _state5 = this.state,
          summary = _state5.summary,
          transferFrom = _state5.transferFrom;
      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], null, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Field, null, external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.from = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... address of owner"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.to = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... addressee"
      }), external__react__default.a.createElement(external__semantic_ui_react_["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transferFrom.value = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "amount to transfer"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, '$.' + summary.symbol), external__react__default.a.createElement("input", null), external__react__default.a.createElement(external__semantic_ui_react_["Label"], null, 'x10^' + summary.decimals))));
    }
    /* Principal Rendering */

  }, {
    key: "renderAllowance",
    value: function renderAllowance() {
      var _state6 = this.state,
          summary = _state6.summary,
          allowance = _state6.allowance;
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Check allowance "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderAllowanceForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true
      }, allowance.response != "" ? solver["a" /* default */].formatNumber(apiToken["a" /* default */].convertToEther(allowance.response)) + " " + summary.symbol + "s" : ""));
    }
  }, {
    key: "renderApprove",
    value: function renderApprove() {
      var _state7 = this.state,
          requests = _state7.requests,
          approve = _state7.approve;
      var metaClass = !approve.response.ok && approve.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Approve "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderApproveForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(requests.approve, approve)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: approve.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "renderIncreaseApproval",
    value: function renderIncreaseApproval() {
      var _state8 = this.state,
          requests = _state8.requests,
          increaseApproval = _state8.increaseApproval;
      var metaClass = !increaseApproval.response.ok && increaseApproval.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Increase approval "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderIncreaseApprovalForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(requests.increaseApproval, increaseApproval)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: increaseApproval.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "renderDecreaseApproval",
    value: function renderDecreaseApproval() {
      var _state9 = this.state,
          requests = _state9.requests,
          decreaseApproval = _state9.decreaseApproval;
      var metaClass = !decreaseApproval.response.ok && decreaseApproval.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Decrease approval "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderDecreaseApprovalForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(requests.decreaseApproval, decreaseApproval)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: decreaseApproval.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "renderTransferFrom",
    value: function renderTransferFrom() {
      var _state10 = this.state,
          requests = _state10.requests,
          transferFrom = _state10.transferFrom;
      var metaClass = !transferFrom.response.ok && transferFrom.response.message != '' ? 'red' : 'normal';
      return external__react__default.a.createElement(external__semantic_ui_react_["Card"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Header, null, "Transfer from "), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Meta, null, this.renderTransferFromForm())), external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, {
        extra: true,
        className: metaClass
      }, this.renderMeta(requests.transferFrom, transferFrom)), external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        className: "cardDimmer",
        active: transferFrom.dimmer
      }, external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
        size: "small"
      }, "Sending Tx")));
    }
  }, {
    key: "render",
    value: function render() {
      var _state11 = this.state,
          tokenAddress = _state11.tokenAddress,
          summary = _state11.summary;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, this.renderAllowance(), this.renderApprove()))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, this.renderIncreaseApproval(), this.renderDecreaseApproval()))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          className: "tokenCards"
        }, this.renderTransferFrom()))));
      }

      return null;
    }
  }]);

  return StandardToken;
}(external__react_["Component"]);

/* harmony default export */ var components_StandardToken = (StandardToken_StandardToken);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(7);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./pages/token/view.js


function view__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { view__typeof = function _typeof(obj) { return typeof obj; }; } else { view__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return view__typeof(obj); }

function view__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function view__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view__createClass(Constructor, protoProps, staticProps) { if (protoProps) view__defineProperties(Constructor.prototype, protoProps); if (staticProps) view__defineProperties(Constructor, staticProps); return Constructor; }

function view__possibleConstructorReturn(self, call) { if (call && (view__typeof(call) === "object" || typeof call === "function")) { return call; } return view__assertThisInitialized(self); }

function view__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function view__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var view_ViewToken =
/*#__PURE__*/
function (_Component) {
  view__inherits(ViewToken, _Component);

  function ViewToken() {
    var _ref;

    var _temp, _this;

    view__classCallCheck(this, ViewToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return view__possibleConstructorReturn(_this, (_temp = _this = view__possibleConstructorReturn(this, (_ref = ViewToken.__proto__ || Object.getPrototypeOf(ViewToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(view__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: _this.props.url.query.tokenAddress,
        networkId: _this.props.url.query.network,
        contractError: false,
        summary: {},
        web3: {},
        dimmerActive: true,
        network: {
          providerNotSet: false,
          networkNotSet: false,
          networkId: 0,
          notLogged: false,
          accounts: [],
          message: '',
          contractError: false
        }
      }
    }), Object.defineProperty(view__assertThisInitialized(_this), "setCheckNetworkInterval", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.interval = setInterval(function () {
          var networkId = _this.state.networkId;
          var network = {
            providerNotSet: false,
            networkNotSet: false,
            networkId: 0,
            notLogged: false,
            accounts: [],
            message: '',
            contractError: false
          };

          if (typeof window.web3 == 'undefined') {
            network.providerNotSet = true;
            network.message("Use a provider to send the Transaction");

            _this.setState({
              network: network
            });

            return;
          }

          if (typeof window.web3 != 'undefined') {
            window.web3.version.getNetwork(
            /*#__PURE__*/
            function () {
              var _ref2 = view__asyncToGenerator(
              /*#__PURE__*/
              regenerator__default.a.mark(function _callee(err, netId) {
                var accounts;
                return regenerator__default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(netId == "1" || netId == "4")) {
                          _context.next = 10;
                          break;
                        }

                        if (netId == "1" && networkId != "1") {
                          network.message = "Please select the Rinkeby network";
                          network.networkNotSet = true;
                        } else if (netId == "4" && networkId != "4") {
                          network.message = "Please select the Main network";
                          network.networkNotSet = true;
                        }

                        _context.next = 4;
                        return apiToken["a" /* default */].getAccounts(window.web3.currentProvider);

                      case 4:
                        accounts = _context.sent;
                        network.accounts = accounts;
                        network.networkId = netId;

                        if (!accounts[0]) {
                          network.message = "Please login to the network";
                          network.notLogged = true;
                        }

                        _context.next = 12;
                        break;

                      case 10:
                        network.message = networkId == 1 ? "Please select the Main network" : "Please select the Rinkeby network";
                        network.networkNotSet = true;

                      case 12:
                        _this.setState({
                          network: network
                        });

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
        }, 1000);
      }
    }), Object.defineProperty(view__assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        routes["Router"].pushRoute("/");
      }
    }), _temp));
  }

  view__createClass(ViewToken, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = view__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2() {
        var tokenAddress, networkId, summary, dimmerActive, contractError;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tokenAddress = this.props.url.query.tokenAddress;
                networkId = this.props.url.query.network;
                _context2.next = 4;
                return apiToken["a" /* default */].getSummary(tokenAddress, networkId);

              case 4:
                summary = _context2.sent;
                this.setCheckNetworkInterval();
                dimmerActive = typeof summary.name == 'undefined';
                contractError = dimmerActive;
                console.log(dimmerActive + " " + contractError);
                this.setState({
                  summary: summary,
                  dimmerActive: dimmerActive,
                  contractError: contractError
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "renderDimmer",
    value: function renderDimmer() {
      var dimmerActive = this.state.dimmerActive;
      return external__react__default.a.createElement(external__semantic_ui_react_["Dimmer"], {
        active: dimmerActive
      }, this.renderDimmerContent());
    }
  }, {
    key: "renderDimmerContent",
    value: function renderDimmerContent() {
      var contractError = this.state.contractError;

      if (contractError) {
        return external__react__default.a.createElement(external__semantic_ui_react_["Header"], {
          as: "h2",
          icon: true,
          inverted: true
        }, external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
          name: "broken chain"
        }), "Contract not found!", external__react__default.a.createElement(external__semantic_ui_react_["Icon"], {
          link: true,
          name: "reply",
          onClick: this.onClick
        }));
      } else {
        return external__react__default.a.createElement(external__semantic_ui_react_["Loader"], {
          size: "large"
        }, "Loading");
      }
    }
    /* Principal Rendering */

  }, {
    key: "renderSummaryCard",
    value: function renderSummaryCard() {
      var summary = this.state.summary;

      if (typeof summary.totalSupply != 'undefined') {
        var items = [{
          header: "Name and symbol: " + summary.name + "(" + summary.symbol + ")",
          meta: summary.decimals + " decimals",
          description: "Total supply is " + solver["a" /* default */].formatNumber(apiToken["a" /* default */].convertToEther(summary.totalSupply)) + " " + summary.symbol + "s",
          extra: 'owner: ' + summary.owner
        }];
        return external__react__default.a.createElement(external__semantic_ui_react_["Card"].Group, {
          id: "summaryCard",
          items: items
        });
      }

      return null;
    }
  }, {
    key: "renderBasicToken",
    value: function renderBasicToken() {
      var _state = this.state,
          tokenAddress = _state.tokenAddress,
          summary = _state.summary,
          network = _state.network;
      return external__react__default.a.createElement(components_BasicToken, {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network
      });
    }
  }, {
    key: "renderStandardToken",
    value: function renderStandardToken() {
      var _state2 = this.state,
          tokenAddress = _state2.tokenAddress,
          summary = _state2.summary,
          network = _state2.network;
      return external__react__default.a.createElement(components_StandardToken, {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, this.renderDimmer(), external__react__default.a.createElement("div", null, this.renderSummaryCard(), this.renderBasicToken(), this.renderStandardToken()));
    }
  }]);

  return ViewToken;
}(external__react_["Component"]);

/* harmony default export */ var view = __webpack_exports__["default"] = (view_ViewToken);

/***/ })
/******/ ]);