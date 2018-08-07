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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_solver__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_apiToken__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var InsertTokenAddress =
/*#__PURE__*/
function (_Component) {
  _inherits(InsertTokenAddress, _Component);

  function InsertTokenAddress() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, InsertTokenAddress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = InsertTokenAddress.__proto__ || Object.getPrototypeOf(InsertTokenAddress)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tokenAddress: "",
        errroMessage: "",
        network: '4'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
          var _this$state, tokenAddress, network, summary;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  _this$state = _this.state, tokenAddress = _this$state.tokenAddress, network = _this$state.network;
                  tokenAddress = tokenAddress.trim();

                  if (!__WEBPACK_IMPORTED_MODULE_5__helpers_solver__["a" /* default */].isAddressValid(tokenAddress)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 6;
                  return __WEBPACK_IMPORTED_MODULE_6__helpers_apiToken__["a" /* default */].getSummary(tokenAddress, network);

                case 6:
                  summary = _context.sent;
                  typeof summary.name == 'undefined' ? _this.setState({
                    errroMessage: "Contract not found"
                  }) : __WEBPACK_IMPORTED_MODULE_4__routes__["Router"].pushRoute("/token/view/".concat(tokenAddress, "/").concat(network));
                  _context.next = 11;
                  break;

                case 10:
                  _this.setState({
                    errroMessage: "Not valid eth address"
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(InsertTokenAddress, [{
    key: "renderIndex",
    value: function renderIndex() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "mainIndex"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
        as: "h1",
        id: "indexHeader",
        block: true,
        align: "center"
      }, "ERC20 TOKEN INTERFACE"));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this2 = this;

      var options = [{
        key: 'rinkeby',
        text: 'Rinkeby eth//: ',
        value: '4'
      }, {
        key: 'main',
        text: 'Main eth//: ',
        value: '1'
      }];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "input"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        className: "indexForm",
        onSubmit: this.onSubmit,
        error: !!this.state.errroMessage
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "index",
        label: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dropdown"], {
          defaultValue: "4",
          options: options,
          onChange: function onChange(e, result) {
            _this2.setState({
              network: result.value
            });
          }
        }),
        labelPosition: "left",
        action: {
          icon: 'search'
        },
        onChange: function onChange(event) {
          return _this2.setState({
            tokenAddress: event.target.value,
            errroMessage: ''
          });
        },
        placeholder: "0x...  Enter the ERC20 token contract address"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errroMessage
      })));
    } // 

  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, this.renderIndex(), this.renderInput()));
    }
  }]);

  return InsertTokenAddress;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InsertTokenAddress);

/***/ })
/******/ ]);