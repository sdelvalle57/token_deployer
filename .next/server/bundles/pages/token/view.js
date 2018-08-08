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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BasicToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__ = __webpack_require__("./helpers/apiTokenERC20.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_solver__ = __webpack_require__("./helpers/solver.js");

var _jsxFileName = "E:\\Ethereum\\TokenCreator\\components\\BasicToken.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BasicToken =
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
            __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
              var _this$state, requests, tokenAddress, balance, network, transfer, transferValue;

              return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].balanceOf(tokenAddress, balance.who, network);

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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].transfer(tokenAddress, transfer.to, transfer.value);

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "contRibbon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, transfer.response.message);
      } else if (transfer.response.ok) {
        var url = network == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + transfer.response.message;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, transfer.response.message.slice(0, 40) + "..."));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        });
      }
    }
  }, {
    key: "renderRibbon",
    value: function renderRibbon(request) {
      var dimmerActive = this.state.dimmerActive;
      var showHide = dimmerActive ? "hide" : "show";
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(request),
        as: "a",
        color: "blue",
        ribbon: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        onSubmit: this.onSubmit(requests.balanceOf),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
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
        placeholder: "0x...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })));
    }
  }, {
    key: "renderTransferForm",
    value: function renderTransferForm() {
      var _this3 = this;

      var _state3 = this.state,
          summary = _state3.summary,
          transfer = _state3.transfer;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transfer.to = event.target.value;

          _this3.setState({
            transfer: transfer
          });
        },
        placeholder: "0x... address of beneficiary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transfer.value = event.target.value;

          _this3.setState({
            transfer: transfer
          });
        },
        placeholder: "amount to send",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, '$.' + summary.symbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, 'x10^' + summary.decimals))));
    }
    /* Principal rendering */

  }, {
    key: "renderCheckBalanceCard",
    value: function renderCheckBalanceCard() {
      var _state4 = this.state,
          summary = _state4.summary,
          balance = _state4.balance;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Check balance of address "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, this.renderCheckBalancesForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, balance.response != "" ? __WEBPACK_IMPORTED_MODULE_4__helpers_solver__["a" /* default */].formatNumber(__WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].convertToEther(balance.response)) + " " + summary.symbol + "s" : ""));
    }
  }, {
    key: "renderTransferCard",
    value: function renderTransferCard() {
      var _state5 = this.state,
          requests = _state5.requests,
          dimmerActive = _state5.dimmerActive,
          transfer = _state5.transfer;
      var metaClass = !transfer.response.ok && transfer.response.message != '' ? 'red' : 'normal';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Transfer "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, this.renderTransferForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        className: metaClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, this.renderMeta(requests.transfer)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        className: "cardDimmer",
        active: dimmerActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Sending Tx")));
    }
  }, {
    key: "render",
    value: function render() {
      var _state6 = this.state,
          tokenAddress = _state6.tokenAddress,
          summary = _state6.summary;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          className: "tokenCards",
          id: "basicTokenCards",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, this.renderCheckBalanceCard(), this.renderTransferCard()))));
      }

      return null;
    }
  }]);

  return BasicToken;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BasicToken);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_api_web3__ = __webpack_require__("./ethereum/api/web3.js");
var _jsxFileName = "E:\\Ethereum\\TokenCreator\\components\\Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "show", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "close", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: false
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "renderModal",

    /* 
    TODO:
    add <Button positive icon='ethereum' labelPosition='right' content='Contribute' />
    inside Modal.Actions, next to the other button
    
    TODO:
    <Modal.Actions>
      TODO: handle error message when  click oo contribte
    </Modal.Actions> 
    */
    value: function renderModal() {
      var open = this.state.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"], {
        size: "tiny",
        open: open,
        onClose: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.renderContent()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], {
        negative: true,
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Close")));
    }
  }, {
    key: "renderLink",
    value: function renderLink(num) {
      var message = "Open Zeppelin Framework";
      var href = "https://openzeppelin.org/";

      if (num == 1) {
        message = "https://github.com/sdelvalle57/token_deployer";
        href = "https://github.com/sdelvalle57/token_deployer";
      } else if (num == 2) {
        message = "Linkedin profile";
        href = "https://www.linkedin.com/in/santiago-del-valle-sdelvalle57-96654969/";
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, message);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        align: "justify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "ERC Token Interface"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), "The purpose of this project is to create an ERC Token interface to read and launch tokens on the test and the main network. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), "We will use ", this.renderLink(0), "  for the contracts and we will add some other contracts for the deployments of these.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), "This is a personal project thus any collaboration would be appreciated, developers, designers and enthusiasts are welcome to contribute.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), "Please pass this project as many peers that you can, is on behalf of the community.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), "Visit ", this.renderLink(1), "  for the latest deployments.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), "If you want to contribute please launch a token and send some ether to the contract(this way is much more appreciated). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), "Email: sdelvalle57@gmail.com ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), this.renderLink(2));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
        style: {
          marginTop: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "ERC-token.online")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "item",
        onClick: this.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "About"))), this.renderModal());
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);
/*

-*/

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "E:\\Ethereum\\TokenCreator\\components\\Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children);
});

/***/ }),

/***/ "./components/StandardToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__ = __webpack_require__("./helpers/apiTokenERC20.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_solver__ = __webpack_require__("./helpers/solver.js");

var _jsxFileName = "E:\\Ethereum\\TokenCreator\\components\\StandardToken.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var StandardToken =
/*#__PURE__*/
function (_Component) {
  _inherits(StandardToken, _Component);

  function StandardToken() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, StandardToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = StandardToken.__proto__ || Object.getPrototypeOf(StandardToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
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
            __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
              var _this$state, requests, tokenAddress, allowance, approve, network, increaseApproval, decreaseApproval, transferFrom, approveValue, increaseApprovalValue, decreaseApprovalValue, transferFromlValue;

              return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].allowance(tokenAddress, allowance.owner, allowance.spender, network);

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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].approve(tokenAddress, approve.spender, approve.value);

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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].increaseApproval(tokenAddress, increaseApproval.spender, increaseApproval.addedValue);

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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].decreaseApproval(tokenAddress, decreaseApproval.spender, decreaseApproval.subtractedValue);

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
                      return __WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].transferFrom(tokenAddress, transferFrom.from, transferFrom.to, transferFrom.value);

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

  _createClass(StandardToken, [{
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        className: "contRibbon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        className: "tfRibbon " + showHide,
        onClick: this.onSubmit(request),
        as: "a",
        color: "blue",
        ribbon: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Send");
    }
  }, {
    key: "renderResponse",
    value: function renderResponse(method) {
      var network = this.state.network;

      if (!method.response.ok && method.response.message != '') {
        method.response.message = method.response.message.length > 80 ? method.response.message.slice(0, 80) : method.response.message;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, method.response.message);
      } else if (method.response.ok) {
        var url = network == 1 ? "" : "rinkeby.";
        url = "https://" + url + "etherscan.io/tx/" + method.response.message;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, method.response.message.slice(0, 40) + "..."));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          className: "contResponse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        onSubmit: this.onSubmit(requests.allowance),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          allowance.owner = event.target.value;

          _this2.setState({
            allowance: allowance
          });
        },
        placeholder: "0x... address of owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
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
        placeholder: "0x... address of spender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      })));
    }
  }, {
    key: "renderApproveForm",
    value: function renderApproveForm() {
      var _this3 = this;

      var _state2 = this.state,
          summary = _state2.summary,
          approve = _state2.approve;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          approve.spender = event.target.value;

          _this3.setState({
            approve: approve
          });
        },
        placeholder: "0x... address of spender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          approve.value = event.target.value;

          _this3.setState({
            approve: approve
          });
        },
        placeholder: "amount to approve",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, '$.' + summary.symbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderIncreaseApprovalForm",
    value: function renderIncreaseApprovalForm() {
      var _this4 = this;

      var _state3 = this.state,
          summary = _state3.summary,
          increaseApproval = _state3.increaseApproval;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          increaseApproval.spender = event.target.value;

          _this4.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "0x... address of spender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          increaseApproval.addedValue = event.target.value;

          _this4.setState({
            increaseApproval: increaseApproval
          });
        },
        placeholder: "amount to increase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, '$.' + summary.symbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderDecreaseApprovalForm",
    value: function renderDecreaseApprovalForm() {
      var _this5 = this;

      var _state4 = this.state,
          summary = _state4.summary,
          decreaseApproval = _state4.decreaseApproval;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          decreaseApproval.spender = event.target.value;

          _this5.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "0x... address of spender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          decreaseApproval.subtractedValue = event.target.value;

          _this5.setState({
            decreaseApproval: decreaseApproval
          });
        },
        placeholder: "amount to decrease",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, '$.' + summary.symbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, 'x10^' + summary.decimals))));
    }
  }, {
    key: "renderTransferFromForm",
    value: function renderTransferFromForm() {
      var _this6 = this;

      var _state5 = this.state,
          summary = _state5.summary,
          transferFrom = _state5.transferFrom;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.from = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... address of owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        label: "eth://",
        onChange: function onChange(event) {
          transferFrom.to = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "0x... addressee",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
        className: "basicToken",
        labelPosition: "right",
        type: "number",
        onChange: function onChange(event) {
          transferFrom.value = event.target.value;

          _this6.setState({
            transferFrom: transferFrom
          });
        },
        placeholder: "amount to transfer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, '$.' + summary.symbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, 'x10^' + summary.decimals))));
    }
    /* Principal Rendering */

  }, {
    key: "renderAllowance",
    value: function renderAllowance() {
      var _state6 = this.state,
          summary = _state6.summary,
          allowance = _state6.allowance;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "Check allowance "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, this.renderAllowanceForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, allowance.response != "" ? __WEBPACK_IMPORTED_MODULE_4__helpers_solver__["a" /* default */].formatNumber(__WEBPACK_IMPORTED_MODULE_3__helpers_apiTokenERC20__["a" /* default */].convertToEther(allowance.response)) + " " + summary.symbol + "s" : ""));
    }
  }, {
    key: "renderApprove",
    value: function renderApprove() {
      var _state7 = this.state,
          requests = _state7.requests,
          approve = _state7.approve;
      var metaClass = !approve.response.ok && approve.response.message != '' ? 'red' : 'normal';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, "Approve "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, this.renderApproveForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        className: metaClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, this.renderMeta(requests.approve, approve)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        className: "cardDimmer",
        active: approve.dimmer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, "Sending Tx")));
    }
  }, {
    key: "renderIncreaseApproval",
    value: function renderIncreaseApproval() {
      var _state8 = this.state,
          requests = _state8.requests,
          increaseApproval = _state8.increaseApproval;
      var metaClass = !increaseApproval.response.ok && increaseApproval.response.message != '' ? 'red' : 'normal';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, "Increase approval "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, this.renderIncreaseApprovalForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        className: metaClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, this.renderMeta(requests.increaseApproval, increaseApproval)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        className: "cardDimmer",
        active: increaseApproval.dimmer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "Sending Tx")));
    }
  }, {
    key: "renderDecreaseApproval",
    value: function renderDecreaseApproval() {
      var _state9 = this.state,
          requests = _state9.requests,
          decreaseApproval = _state9.decreaseApproval;
      var metaClass = !decreaseApproval.response.ok && decreaseApproval.response.message != '' ? 'red' : 'normal';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, "Decrease approval "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, this.renderDecreaseApprovalForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        className: metaClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }, this.renderMeta(requests.decreaseApproval, decreaseApproval)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        className: "cardDimmer",
        active: decreaseApproval.dimmer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, "Sending Tx")));
    }
  }, {
    key: "renderTransferFrom",
    value: function renderTransferFrom() {
      var _state10 = this.state,
          requests = _state10.requests,
          transferFrom = _state10.transferFrom;
      var metaClass = !transferFrom.response.ok && transferFrom.response.message != '' ? 'red' : 'normal';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, "Transfer from "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, this.renderTransferFromForm())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
        extra: true,
        className: metaClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, this.renderMeta(requests.transferFrom, transferFrom)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        className: "cardDimmer",
        active: transferFrom.dimmer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, "Sending Tx")));
    }
  }, {
    key: "render",
    value: function render() {
      var _state11 = this.state,
          tokenAddress = _state11.tokenAddress,
          summary = _state11.summary;

      if (typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          className: "tokenCards",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          }
        }, this.renderAllowance(), this.renderApprove()))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 491
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          className: "tokenCards",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          }
        }, this.renderIncreaseApproval(), this.renderDecreaseApproval()))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          className: "tokenCards",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 501
          }
        }, this.renderTransferFrom()))));
      }

      return null;
    }
  }]);

  return StandardToken;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (StandardToken);

/***/ }),

/***/ "./ethereum/api/basicToken.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicTokenAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicERC20_json__ = __webpack_require__("./ethereum/build/contracts/BasicERC20.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicERC20_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicERC20_json__);

function basicTokenAt(tokenAddress, web3) {
  return new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicERC20_json___default.a.abi, tokenAddress);
}

/***/ }),

/***/ "./ethereum/api/token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tokenAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicToken_json__ = __webpack_require__("./ethereum/build/contracts/BasicToken.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicToken_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicToken_json__);

function tokenAt(tokenAddress, web3) {
  return new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_0__build_contracts_BasicToken_json___default.a.abi, tokenAddress);
}

/***/ }),

/***/ "./ethereum/api/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle__ = __webpack_require__("./ethereum/truffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__truffle__);


var web3;
var env = process.env.ENV || "development" || 'development';

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else if (env == 'development') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a("http://localhost:" + __WEBPACK_IMPORTED_MODULE_1__truffle___default.a.networks.development.port);
} else {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "./ethereum/api/web3Socket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = web3Socket;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle__ = __webpack_require__("./ethereum/truffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__truffle__);


function web3Socket(network) {
  network = parseInt(network);
  var web3;
  var env = process.env.ENV || "development" || 'development';
  /*if(env == 'development') {
    web3 = new Web3("ws://localhost:"+truffle.networks.development.port);
  } else*/

  {
    switch (network) {
      case 1:
        web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://mainnet.infura.io/_ws'));
        break;

      default:
        web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.WebsocketProvider('wss://rinkeby.infura.io/_ws'));
        break;
    }
  }
  return web3;
}

/***/ }),

/***/ "./ethereum/build/contracts/BasicERC20.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"BasicERC20","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],"bytecode":"0x6080604052601260045534801561001557600080fd5b50604051610b12380380610b12833981018060405281019080805182019291906020018051820192919060200180519060200190929190505050600033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600454600a0a820290508060018190555083600290805190602001906100b992919061016d565b5082600390805190602001906100d092919061016d565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350505050610212565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ae57805160ff19168380011785556101dc565b828001600101855582156101dc579182015b828111156101db5782518255916020019190600101906101c0565b5b5090506101e991906101ed565b5090565b61020f91905b8082111561020b5760008160009055506001016101f3565b5090565b90565b6108f1806102216000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063313ce5671461014e57806370a08231146101795780638da5cb5b146101d057806395d89b4114610227578063a9059cbb146102b7578063f2fde38b1461031c575b600080fd5b34801561009f57600080fd5b506100a861035f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103fd565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b50610163610407565b6040518082815260200191505060405180910390f35b34801561018557600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040d565b6040518082815260200191505060405180910390f35b3480156101dc57600080fd5b506101e5610455565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023357600080fd5b5061023c61047b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c357600080fd5b50610302600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610519565b604051808215151515815260200191505060405180910390f35b34801561032857600080fd5b5061035d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610738565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b505050505081565b6000600154905090565b60045481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561055657600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156105a357600080fd5b6105f4826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461089090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610687826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108a990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561079457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561089e57fe5b818303905092915050565b600081830190508281101515156108bc57fe5b809050929150505600a165627a7a72305820c71aa602c5b8f64377674156f241ca345ec0bee1a0f99c4f128097d3edc9b4670029","deployedBytecode":"0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063313ce5671461014e57806370a08231146101795780638da5cb5b146101d057806395d89b4114610227578063a9059cbb146102b7578063f2fde38b1461031c575b600080fd5b34801561009f57600080fd5b506100a861035f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103fd565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b50610163610407565b6040518082815260200191505060405180910390f35b34801561018557600080fd5b506101ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040d565b6040518082815260200191505060405180910390f35b3480156101dc57600080fd5b506101e5610455565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023357600080fd5b5061023c61047b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c357600080fd5b50610302600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610519565b604051808215151515815260200191505060405180910390f35b34801561032857600080fd5b5061035d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610738565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b505050505081565b6000600154905090565b60045481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561055657600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156105a357600080fd5b6105f4826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461089090919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610687826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108a990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561079457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561089e57fe5b818303905092915050565b600081830190508281101515156108bc57fe5b809050929150505600a165627a7a72305820c71aa602c5b8f64377674156f241ca345ec0bee1a0f99c4f128097d3edc9b4670029","sourceMap":"96:412:4:-;;;218:2:5;192:28;;151:354:4;8:9:-1;5:2;;;30:1;27;20:12;5:2;151:354:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;235:22;539:10:10;531:5;;:18;;;;;;;;;;;;;;;;;;292:8:4;;278:2;:23;260:14;:42;235:67;;328:14;313:12;:29;;;;360:5;353:4;:12;;;;;;;;;;;;:::i;:::-;;385:7;376:6;:16;;;;;;;;;;;;:::i;:::-;;426:14;403:8;:20;412:10;403:20;;;;;;;;;;;;;;;:37;;;;470:10;456:41;;465:3;456:41;482:14;456:41;;;;;;;;;;;;;;;;;;151:354;;;;96:412;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"96:412:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;140:18:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;140:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;140:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:91:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;404:91:0;;;;;;;;;;;;;;;;;;;;;;;192:28:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;192:28:5;;;;;;;;;;;;;;;;;;;;;;;1244:107:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1244:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;249:20:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;249:20:10;;;;;;;;;;;;;;;;;;;;;;;;;;;165::5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;165:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;165:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;668:355:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;668:355:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;902:192:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;902:192:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;140:18:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;404:91:0:-;448:7;475:12;;468:19;;404:91;:::o;192:28:5:-;;;;:::o;1244:107:0:-;1300:7;1327:8;:16;1336:6;1327:16;;;;;;;;;;;;;;;;1320:23;;1244:107;;;:::o;249:20:10:-;;;;;;;;;;;;;:::o;165::5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;668:355:0:-;731:4;771:1;756:17;;:3;:17;;;;748:26;;;;;;;;803:8;:20;812:10;803:20;;;;;;;;;;;;;;;;793:6;:30;;785:39;;;;;;;;860:32;885:6;860:8;:20;869:10;860:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;837:8;:20;846:10;837:20;;;;;;;;;;;;;;;:55;;;;919:25;937:6;919:8;:13;928:3;919:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;903:8;:13;912:3;903:13;;;;;;;;;;;;;;;:41;;;;981:3;960:33;;969:10;960:33;;;986:6;960:33;;;;;;;;;;;;;;;;;;1011:4;1004:11;;668:355;;;;:::o;902:192:10:-;702:5;;;;;;;;;;;688:19;;:10;:19;;;680:28;;;;;;;;1003:1;983:22;;:8;:22;;;;975:31;;;;;;;;1050:8;1022:37;;1043:5;;;;;;;;;;;1022:37;;;;;;;;;;;;1078:8;1070:5;;:16;;;;;;;;;;;;;;;;;;902:192;:::o;922:123:11:-;980:7;1012:1;1007;:6;;1000:14;;;;;;1036:1;1032;:5;1025:12;;922:123;;;;:::o;1114:141::-;1172:9;1202:1;1198;:5;1194:9;;1226:1;1221;:6;;1214:14;;;;;;1246:1;1239:8;;1114:141;;;;:::o","source":"pragma solidity 0.4.24;\r\n\r\nimport \"./DetailedERC20.sol\"; \r\nimport \"../../utils/Ownable.sol\";\r\n\r\ncontract BasicERC20 is DetailedERC20, Ownable {\r\n\r\n    constructor(string _name, string _symbol, uint256 _initialSupply) public {\r\n        uint256 INITIAL_SUPPLY = _initialSupply * (10 ** uint256(decimals));\r\n        totalSupply_ = INITIAL_SUPPLY;\r\n        name = _name;\r\n        symbol = _symbol;\r\n        balances[msg.sender] = INITIAL_SUPPLY;\r\n        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);\r\n    }\r\n}","sourcePath":"E:\\Ethereum\\TokenCreator\\ethereum\\contracts\\ERC20\\flavors\\BasicERC20.sol","ast":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","exportedSymbols":{"BasicERC20":[472]},"id":473,"nodeType":"SourceUnit","nodes":[{"id":418,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/DetailedERC20.sol","file":"./DetailedERC20.sol","id":419,"nodeType":"ImportDirective","scope":473,"sourceUnit":487,"src":"27:29:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":420,"nodeType":"ImportDirective","scope":473,"sourceUnit":1119,"src":"59:33:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":421,"name":"DetailedERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":486,"src":"119:13:4","typeDescriptions":{"typeIdentifier":"t_contract$_DetailedERC20_$486","typeString":"contract DetailedERC20"}},"id":422,"nodeType":"InheritanceSpecifier","src":"119:13:4"},{"arguments":null,"baseName":{"contractScope":null,"id":423,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1118,"src":"134:7:4","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1118","typeString":"contract Ownable"}},"id":424,"nodeType":"InheritanceSpecifier","src":"134:7:4"}],"contractDependencies":[95,170,486,1118],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":472,"linearizedBaseContracts":[472,1118,486,95,170],"name":"BasicERC20","nodeType":"ContractDefinition","nodes":[{"body":{"id":470,"nodeType":"Block","src":"224:281:4","statements":[{"assignments":[434],"declarations":[{"constant":false,"id":434,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":471,"src":"235:22:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":433,"name":"uint256","nodeType":"ElementaryTypeName","src":"235:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":443,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":442,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":435,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":430,"src":"260:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":440,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"hexValue":"3130","id":436,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"278:2:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"nodeType":"BinaryOperation","operator":"**","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":438,"name":"decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":485,"src":"292:8:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":437,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"284:7:4","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":439,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"284:17:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"278:23:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":441,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"277:25:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"260:42:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"235:67:4"},{"expression":{"argumentTypes":null,"id":446,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":444,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"313:12:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":445,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"328:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"313:29:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":447,"nodeType":"ExpressionStatement","src":"313:29:4"},{"expression":{"argumentTypes":null,"id":450,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":448,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":480,"src":"353:4:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":449,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":426,"src":"360:5:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"353:12:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":451,"nodeType":"ExpressionStatement","src":"353:12:4"},{"expression":{"argumentTypes":null,"id":454,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":452,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":482,"src":"376:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":453,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":428,"src":"385:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"376:16:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":455,"nodeType":"ExpressionStatement","src":"376:16:4"},{"expression":{"argumentTypes":null,"id":461,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":456,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"403:8:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":459,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":457,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"412:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":458,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"412:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"403:20:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":460,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"426:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"403:37:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":462,"nodeType":"ExpressionStatement","src":"403:37:4"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307830","id":464,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"465:3:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0x0"},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":465,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"470:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":466,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"470:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":467,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"482:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":463,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"456:8:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":468,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"456:41:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":469,"nodeType":"EmitStatement","src":"451:46:4"}]},"documentation":null,"id":471,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":431,"nodeType":"ParameterList","parameters":[{"constant":false,"id":426,"name":"_name","nodeType":"VariableDeclaration","scope":471,"src":"163:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":425,"name":"string","nodeType":"ElementaryTypeName","src":"163:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":428,"name":"_symbol","nodeType":"VariableDeclaration","scope":471,"src":"177:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":427,"name":"string","nodeType":"ElementaryTypeName","src":"177:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":430,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":471,"src":"193:22:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":429,"name":"uint256","nodeType":"ElementaryTypeName","src":"193:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"162:54:4"},"payable":false,"returnParameters":{"id":432,"nodeType":"ParameterList","parameters":[],"src":"224:0:4"},"scope":472,"src":"151:354:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":473,"src":"96:412:4"}],"src":"0:508:4"},"legacyAST":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/BasicERC20.sol","exportedSymbols":{"BasicERC20":[472]},"id":473,"nodeType":"SourceUnit","nodes":[{"id":418,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/flavors/DetailedERC20.sol","file":"./DetailedERC20.sol","id":419,"nodeType":"ImportDirective","scope":473,"sourceUnit":487,"src":"27:29:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/Ownable.sol","file":"../../utils/Ownable.sol","id":420,"nodeType":"ImportDirective","scope":473,"sourceUnit":1119,"src":"59:33:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":421,"name":"DetailedERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":486,"src":"119:13:4","typeDescriptions":{"typeIdentifier":"t_contract$_DetailedERC20_$486","typeString":"contract DetailedERC20"}},"id":422,"nodeType":"InheritanceSpecifier","src":"119:13:4"},{"arguments":null,"baseName":{"contractScope":null,"id":423,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":1118,"src":"134:7:4","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$1118","typeString":"contract Ownable"}},"id":424,"nodeType":"InheritanceSpecifier","src":"134:7:4"}],"contractDependencies":[95,170,486,1118],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":472,"linearizedBaseContracts":[472,1118,486,95,170],"name":"BasicERC20","nodeType":"ContractDefinition","nodes":[{"body":{"id":470,"nodeType":"Block","src":"224:281:4","statements":[{"assignments":[434],"declarations":[{"constant":false,"id":434,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":471,"src":"235:22:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":433,"name":"uint256","nodeType":"ElementaryTypeName","src":"235:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":443,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":442,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":435,"name":"_initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":430,"src":"260:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":440,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"hexValue":"3130","id":436,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"278:2:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"nodeType":"BinaryOperation","operator":"**","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":438,"name":"decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":485,"src":"292:8:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":437,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"284:7:4","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":439,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"284:17:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"278:23:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":441,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"277:25:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"260:42:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"235:67:4"},{"expression":{"argumentTypes":null,"id":446,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":444,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"313:12:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":445,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"328:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"313:29:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":447,"nodeType":"ExpressionStatement","src":"313:29:4"},{"expression":{"argumentTypes":null,"id":450,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":448,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":480,"src":"353:4:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":449,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":426,"src":"360:5:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"353:12:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":451,"nodeType":"ExpressionStatement","src":"353:12:4"},{"expression":{"argumentTypes":null,"id":454,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":452,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":482,"src":"376:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":453,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":428,"src":"385:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"376:16:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":455,"nodeType":"ExpressionStatement","src":"376:16:4"},{"expression":{"argumentTypes":null,"id":461,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":456,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"403:8:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":459,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":457,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"412:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":458,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"412:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"403:20:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":460,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"426:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"403:37:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":462,"nodeType":"ExpressionStatement","src":"403:37:4"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307830","id":464,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"465:3:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0x0"},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":465,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"470:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":466,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"470:10:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":467,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"482:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":463,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"456:8:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":468,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"456:41:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":469,"nodeType":"EmitStatement","src":"451:46:4"}]},"documentation":null,"id":471,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":431,"nodeType":"ParameterList","parameters":[{"constant":false,"id":426,"name":"_name","nodeType":"VariableDeclaration","scope":471,"src":"163:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":425,"name":"string","nodeType":"ElementaryTypeName","src":"163:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":428,"name":"_symbol","nodeType":"VariableDeclaration","scope":471,"src":"177:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":427,"name":"string","nodeType":"ElementaryTypeName","src":"177:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":430,"name":"_initialSupply","nodeType":"VariableDeclaration","scope":471,"src":"193:22:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":429,"name":"uint256","nodeType":"ElementaryTypeName","src":"193:7:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"162:54:4"},"payable":false,"returnParameters":{"id":432,"nodeType":"ParameterList","parameters":[],"src":"224:0:4"},"scope":472,"src":"151:354:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":473,"src":"96:412:4"}],"src":"0:508:4"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-08-07T11:48:02.584Z"}

/***/ }),

/***/ "./ethereum/build/contracts/BasicToken.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"BasicToken","abi":[{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50610415806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610087578063a9059cbb146100de575b600080fd5b34801561006857600080fd5b50610071610143565b6040518082815260200191505060405180910390f35b34801561009357600080fd5b506100c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061014d565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b50610129600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101d257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561021f57600080fd5b610270826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610303826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103cd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103c257fe5b818303905092915050565b600081830190508281101515156103e057fe5b809050929150505600a165627a7a7230582068d65720f3663e97d0cf244857040339d76a41d00dfbba2f63f2f385f950cd590029","deployedBytecode":"0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610087578063a9059cbb146100de575b600080fd5b34801561006857600080fd5b50610071610143565b6040518082815260200191505060405180910390f35b34801561009357600080fd5b506100c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061014d565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b50610129600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101d257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561021f57600080fd5b610270826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610303826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103cd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103c257fe5b818303905092915050565b600081830190508281101515156103e057fe5b809050929150505600a165627a7a7230582068d65720f3663e97d0cf244857040339d76a41d00dfbba2f63f2f385f950cd590029","sourceMap":"189:1167:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;189:1167:0;;;;;;;","deployedSourceMap":"189:1167:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;404:91:0;;;;;;;;;;;;;;;;;;;;;;;1244:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1244:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;668:355;;8:9:-1;5:2;;;30:1;27;20:12;5:2;668:355:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;404:91;448:7;475:12;;468:19;;404:91;:::o;1244:107::-;1300:7;1327:8;:16;1336:6;1327:16;;;;;;;;;;;;;;;;1320:23;;1244:107;;;:::o;668:355::-;731:4;771:1;756:17;;:3;:17;;;;748:26;;;;;;;;803:8;:20;812:10;803:20;;;;;;;;;;;;;;;;793:6;:30;;785:39;;;;;;;;860:32;885:6;860:8;:20;869:10;860:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;837:8;:20;846:10;837:20;;;;;;;;;;;;;;;:55;;;;919:25;937:6;919:8;:13;928:3;919:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;903:8;:13;912:3;903:13;;;;;;;;;;;;;;;:41;;;;981:3;960:33;;969:10;960:33;;;986:6;960:33;;;;;;;;;;;;;;;;;;1011:4;1004:11;;668:355;;;;:::o;922:123:11:-;980:7;1012:1;1007;:6;;1000:14;;;;;;1036:1;1032;:5;1025:12;;922:123;;;;:::o;1114:141::-;1172:9;1202:1;1198;:5;1194:9;;1226:1;1221;:6;;1214:14;;;;;;1246:1;1239:8;;1114:141;;;;:::o","source":"pragma solidity 0.4.24;\r\n\r\n\r\nimport \"./ERC20Basic.sol\"; \r\nimport \"../utils/SafeMath.sol\";\r\n\r\n\r\n/**\r\n * @title Basic token\r\n * @dev Basic version of StandardToken, with no allowances.\r\n */\r\ncontract BasicToken is ERC20Basic {\r\n    using SafeMath for uint256;\r\n\r\n    mapping(address => uint256) balances;\r\n\r\n    uint256 totalSupply_;\r\n\r\n    /**\r\n    * @dev Total number of tokens in existence\r\n    */\r\n    function totalSupply() public view returns (uint256) {\r\n        return totalSupply_;\r\n    }\r\n\r\n    /**\r\n    * @dev Transfer token for a specified address\r\n    * @param _to The address to transfer to.\r\n    * @param _value The amount to be transferred.\r\n    */\r\n    function transfer(address _to, uint256 _value) public returns (bool) {\r\n        require(_to != address(0));\r\n        require(_value <= balances[msg.sender]);\r\n\r\n        balances[msg.sender] = balances[msg.sender].sub(_value);\r\n        balances[_to] = balances[_to].add(_value);\r\n        emit Transfer(msg.sender, _to, _value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n    * @dev Gets the balance of the specified address.\r\n    * @param _owner The address to query the the balance of.\r\n    * @return An uint256 representing the amount owned by the passed address.\r\n    */\r\n    function balanceOf(address _owner) public view returns (uint256) {\r\n        return balances[_owner];\r\n    }\r\n\r\n}","sourcePath":"E:\\Ethereum\\TokenCreator\\ethereum\\contracts\\ERC20\\BasicToken.sol","ast":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/BasicToken.sol","exportedSymbols":{"BasicToken":[95]},"id":96,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:0"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/ERC20Basic.sol","file":"./ERC20Basic.sol","id":2,"nodeType":"ImportDirective","scope":96,"sourceUnit":171,"src":"29:26:0","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/SafeMath.sol","file":"../utils/SafeMath.sol","id":3,"nodeType":"ImportDirective","scope":96,"sourceUnit":1213,"src":"58:31:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":4,"name":"ERC20Basic","nodeType":"UserDefinedTypeName","referencedDeclaration":170,"src":"212:10:0","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20Basic_$170","typeString":"contract ERC20Basic"}},"id":5,"nodeType":"InheritanceSpecifier","src":"212:10:0"}],"contractDependencies":[170],"contractKind":"contract","documentation":"@title Basic token\r\n@dev Basic version of StandardToken, with no allowances.\r","fullyImplemented":true,"id":95,"linearizedBaseContracts":[95,170],"name":"BasicToken","nodeType":"ContractDefinition","nodes":[{"id":8,"libraryName":{"contractScope":null,"id":6,"name":"SafeMath","nodeType":"UserDefinedTypeName","referencedDeclaration":1212,"src":"236:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_SafeMath_$1212","typeString":"library SafeMath"}},"nodeType":"UsingForDirective","src":"230:27:0","typeName":{"id":7,"name":"uint256","nodeType":"ElementaryTypeName","src":"249:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},{"constant":false,"id":12,"name":"balances","nodeType":"VariableDeclaration","scope":95,"src":"265:36:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":11,"keyType":{"id":9,"name":"address","nodeType":"ElementaryTypeName","src":"273:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"265:27:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":10,"name":"uint256","nodeType":"ElementaryTypeName","src":"284:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"constant":false,"id":14,"name":"totalSupply_","nodeType":"VariableDeclaration","scope":95,"src":"310:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":13,"name":"uint256","nodeType":"ElementaryTypeName","src":"310:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":21,"nodeType":"Block","src":"457:38:0","statements":[{"expression":{"argumentTypes":null,"id":19,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"475:12:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":18,"id":20,"nodeType":"Return","src":"468:19:0"}]},"documentation":"@dev Total number of tokens in existence\r","id":22,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","parameters":{"id":15,"nodeType":"ParameterList","parameters":[],"src":"424:2:0"},"payable":false,"returnParameters":{"id":18,"nodeType":"ParameterList","parameters":[{"constant":false,"id":17,"name":"","nodeType":"VariableDeclaration","scope":22,"src":"448:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint256","nodeType":"ElementaryTypeName","src":"448:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"447:9:0"},"scope":95,"src":"404:91:0","stateMutability":"view","superFunction":145,"visibility":"public"},{"body":{"id":81,"nodeType":"Block","src":"737:286:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":32,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"756:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":34,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"771:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":33,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"763:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":35,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"763:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"756:17:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":31,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1230,1231],"referencedDeclaration":1230,"src":"748:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":37,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"748:26:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":38,"nodeType":"ExpressionStatement","src":"748:26:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":40,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"793:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":41,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"803:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":44,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":42,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"812:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"812:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"803:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"793:30:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":39,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1230,1231],"referencedDeclaration":1230,"src":"785:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":46,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"785:39:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":47,"nodeType":"ExpressionStatement","src":"785:39:0"},{"expression":{"argumentTypes":null,"id":59,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":48,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"837:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":51,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":49,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"846:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"846:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"837:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":57,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"885:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":52,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"860:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":55,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":53,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"869:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":54,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"869:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"860:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":1187,"src":"860:24:0","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":58,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"860:32:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"837:55:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":60,"nodeType":"ExpressionStatement","src":"837:55:0"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":61,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"903:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"id":62,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"912:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"903:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":68,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"937:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":64,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"919:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":66,"indexExpression":{"argumentTypes":null,"id":65,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"928:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"919:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":1211,"src":"919:17:0","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"919:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"903:41:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"903:41:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":73,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"969:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"969:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":75,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"981:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"986:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":72,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"960:8:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":77,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"960:33:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":78,"nodeType":"EmitStatement","src":"955:38:0"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":79,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1011:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":30,"id":80,"nodeType":"Return","src":"1004:11:0"}]},"documentation":"@dev Transfer token for a specified address\r\n@param _to The address to transfer to.\r\n@param _value The amount to be transferred.\r","id":82,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":27,"nodeType":"ParameterList","parameters":[{"constant":false,"id":24,"name":"_to","nodeType":"VariableDeclaration","scope":82,"src":"686:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":23,"name":"address","nodeType":"ElementaryTypeName","src":"686:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":26,"name":"_value","nodeType":"VariableDeclaration","scope":82,"src":"699:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint256","nodeType":"ElementaryTypeName","src":"699:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"685:29:0"},"payable":false,"returnParameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":29,"name":"","nodeType":"VariableDeclaration","scope":82,"src":"731:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":28,"name":"bool","nodeType":"ElementaryTypeName","src":"731:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"730:6:0"},"scope":95,"src":"668:355:0","stateMutability":"nonpayable","superFunction":161,"visibility":"public"},{"body":{"id":93,"nodeType":"Block","src":"1309:42:0","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":89,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"1327:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":91,"indexExpression":{"argumentTypes":null,"id":90,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":84,"src":"1336:6:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1327:16:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":88,"id":92,"nodeType":"Return","src":"1320:23:0"}]},"documentation":"@dev Gets the balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@return An uint256 representing the amount owned by the passed address.\r","id":94,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"name":"_owner","nodeType":"VariableDeclaration","scope":94,"src":"1263:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":83,"name":"address","nodeType":"ElementaryTypeName","src":"1263:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1262:16:0"},"payable":false,"returnParameters":{"id":88,"nodeType":"ParameterList","parameters":[{"constant":false,"id":87,"name":"","nodeType":"VariableDeclaration","scope":94,"src":"1300:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":86,"name":"uint256","nodeType":"ElementaryTypeName","src":"1300:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1299:9:0"},"scope":95,"src":"1244:107:0","stateMutability":"view","superFunction":152,"visibility":"public"}],"scope":96,"src":"189:1167:0"}],"src":"0:1356:0"},"legacyAST":{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/BasicToken.sol","exportedSymbols":{"BasicToken":[95]},"id":96,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","0.4",".24"],"nodeType":"PragmaDirective","src":"0:23:0"},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/ERC20/ERC20Basic.sol","file":"./ERC20Basic.sol","id":2,"nodeType":"ImportDirective","scope":96,"sourceUnit":171,"src":"29:26:0","symbolAliases":[],"unitAlias":""},{"absolutePath":"/E/Ethereum/TokenCreator/ethereum/contracts/utils/SafeMath.sol","file":"../utils/SafeMath.sol","id":3,"nodeType":"ImportDirective","scope":96,"sourceUnit":1213,"src":"58:31:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":4,"name":"ERC20Basic","nodeType":"UserDefinedTypeName","referencedDeclaration":170,"src":"212:10:0","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20Basic_$170","typeString":"contract ERC20Basic"}},"id":5,"nodeType":"InheritanceSpecifier","src":"212:10:0"}],"contractDependencies":[170],"contractKind":"contract","documentation":"@title Basic token\r\n@dev Basic version of StandardToken, with no allowances.\r","fullyImplemented":true,"id":95,"linearizedBaseContracts":[95,170],"name":"BasicToken","nodeType":"ContractDefinition","nodes":[{"id":8,"libraryName":{"contractScope":null,"id":6,"name":"SafeMath","nodeType":"UserDefinedTypeName","referencedDeclaration":1212,"src":"236:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_SafeMath_$1212","typeString":"library SafeMath"}},"nodeType":"UsingForDirective","src":"230:27:0","typeName":{"id":7,"name":"uint256","nodeType":"ElementaryTypeName","src":"249:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},{"constant":false,"id":12,"name":"balances","nodeType":"VariableDeclaration","scope":95,"src":"265:36:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":11,"keyType":{"id":9,"name":"address","nodeType":"ElementaryTypeName","src":"273:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"265:27:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":10,"name":"uint256","nodeType":"ElementaryTypeName","src":"284:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"constant":false,"id":14,"name":"totalSupply_","nodeType":"VariableDeclaration","scope":95,"src":"310:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":13,"name":"uint256","nodeType":"ElementaryTypeName","src":"310:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":21,"nodeType":"Block","src":"457:38:0","statements":[{"expression":{"argumentTypes":null,"id":19,"name":"totalSupply_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"475:12:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":18,"id":20,"nodeType":"Return","src":"468:19:0"}]},"documentation":"@dev Total number of tokens in existence\r","id":22,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","parameters":{"id":15,"nodeType":"ParameterList","parameters":[],"src":"424:2:0"},"payable":false,"returnParameters":{"id":18,"nodeType":"ParameterList","parameters":[{"constant":false,"id":17,"name":"","nodeType":"VariableDeclaration","scope":22,"src":"448:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint256","nodeType":"ElementaryTypeName","src":"448:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"447:9:0"},"scope":95,"src":"404:91:0","stateMutability":"view","superFunction":145,"visibility":"public"},{"body":{"id":81,"nodeType":"Block","src":"737:286:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":32,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"756:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":34,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"771:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":33,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"763:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":35,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"763:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"756:17:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":31,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1230,1231],"referencedDeclaration":1230,"src":"748:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":37,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"748:26:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":38,"nodeType":"ExpressionStatement","src":"748:26:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":40,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"793:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":41,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"803:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":44,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":42,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"812:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"812:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"803:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"793:30:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":39,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1230,1231],"referencedDeclaration":1230,"src":"785:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":46,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"785:39:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":47,"nodeType":"ExpressionStatement","src":"785:39:0"},{"expression":{"argumentTypes":null,"id":59,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":48,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"837:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":51,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":49,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"846:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"846:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"837:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":57,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"885:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":52,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"860:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":55,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":53,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"869:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":54,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"869:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"860:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":1187,"src":"860:24:0","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":58,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"860:32:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"837:55:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":60,"nodeType":"ExpressionStatement","src":"837:55:0"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":61,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"903:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"id":62,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"912:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"903:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":68,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"937:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":64,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"919:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":66,"indexExpression":{"argumentTypes":null,"id":65,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"928:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"919:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":1211,"src":"919:17:0","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"919:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"903:41:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"903:41:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":73,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1227,"src":"969:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"969:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":75,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"981:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"986:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":72,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":169,"src":"960:8:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":77,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"960:33:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":78,"nodeType":"EmitStatement","src":"955:38:0"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":79,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1011:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":30,"id":80,"nodeType":"Return","src":"1004:11:0"}]},"documentation":"@dev Transfer token for a specified address\r\n@param _to The address to transfer to.\r\n@param _value The amount to be transferred.\r","id":82,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":27,"nodeType":"ParameterList","parameters":[{"constant":false,"id":24,"name":"_to","nodeType":"VariableDeclaration","scope":82,"src":"686:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":23,"name":"address","nodeType":"ElementaryTypeName","src":"686:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":26,"name":"_value","nodeType":"VariableDeclaration","scope":82,"src":"699:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint256","nodeType":"ElementaryTypeName","src":"699:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"685:29:0"},"payable":false,"returnParameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":29,"name":"","nodeType":"VariableDeclaration","scope":82,"src":"731:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":28,"name":"bool","nodeType":"ElementaryTypeName","src":"731:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"730:6:0"},"scope":95,"src":"668:355:0","stateMutability":"nonpayable","superFunction":161,"visibility":"public"},{"body":{"id":93,"nodeType":"Block","src":"1309:42:0","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":89,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"1327:8:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":91,"indexExpression":{"argumentTypes":null,"id":90,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":84,"src":"1336:6:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1327:16:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":88,"id":92,"nodeType":"Return","src":"1320:23:0"}]},"documentation":"@dev Gets the balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@return An uint256 representing the amount owned by the passed address.\r","id":94,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"name":"_owner","nodeType":"VariableDeclaration","scope":94,"src":"1263:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":83,"name":"address","nodeType":"ElementaryTypeName","src":"1263:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1262:16:0"},"payable":false,"returnParameters":{"id":88,"nodeType":"ParameterList","parameters":[{"constant":false,"id":87,"name":"","nodeType":"VariableDeclaration","scope":94,"src":"1300:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":86,"name":"uint256","nodeType":"ElementaryTypeName","src":"1300:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1299:9:0"},"scope":95,"src":"1244:107:0","stateMutability":"view","superFunction":152,"visibility":"public"}],"scope":96,"src":"189:1167:0"}],"src":"0:1356:0"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-08-07T11:48:02.583Z"}

/***/ }),

/***/ "./ethereum/truffle.js":
/***/ (function(module, exports, __webpack_require__) {

var HDWalletProvider = __webpack_require__("truffle-hdwallet-provider-privkey");

var privKey = "D26D6AFD5A2A4862CC8FB02523BDDE5CCF1427159519D9FC9187BE7D960BECCB".toLowerCase(); // private keys

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
      ///from: "0x9426bAb45448D7830F4e690d34f553Bec97e94Cd"

    },
    rinkeby: {
      provider: function provider() {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/qAudSy87uo2SByV57ETq");
      },
      network_id: '4',
      gas: 4612388
    }
  }
};

/***/ }),

/***/ "./helpers/apiTokenERC20.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__ = __webpack_require__("./ethereum/api/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__ = __webpack_require__("./ethereum/api/web3Socket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_api_basicToken__ = __webpack_require__("./ethereum/api/basicToken.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__ = __webpack_require__("./ethereum/api/token.js");


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
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_basicToken__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 23:
            return _context.abrupt("return", summary);

          case 24:
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
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_basicToken__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_basicToken__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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
            token = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_api_basicToken__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
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
            token = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__["a" /* default */])(tokenAddress, Object(__WEBPACK_IMPORTED_MODULE_2__ethereum_api_web3Socket__["a" /* default */])(network));
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
            token = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
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
            token = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
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
            token = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
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
            token = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_api_token__["a" /* default */])(tokenAddress, __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */]);
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
            return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].eth.getAccounts();

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
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.fromWei(value, 'ether');
}

function convertToWei(value) {
  return __WEBPACK_IMPORTED_MODULE_1__ethereum_api_web3__["a" /* default */].utils.toWei(value);
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

/***/ "./helpers/solver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_numeral__ = __webpack_require__("numeral");
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

/***/ "./pages/token/view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_apiTokenERC20__ = __webpack_require__("./helpers/apiTokenERC20.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_solver__ = __webpack_require__("./helpers/solver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_BasicToken__ = __webpack_require__("./components/BasicToken.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_StandardToken__ = __webpack_require__("./components/StandardToken.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__routes__);

var _jsxFileName = "E:\\Ethereum\\TokenCreator\\pages\\token\\view.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var ViewToken =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewToken, _Component);

  function ViewToken() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ViewToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ViewToken.__proto__ || Object.getPrototypeOf(ViewToken)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
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
    }), Object.defineProperty(_assertThisInitialized(_this), "setCheckNetworkInterval", {
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
            network.message = "Use a provider to send the Transaction";

            _this.setState({
              network: network
            });

            return;
          }

          if (typeof window.web3 != 'undefined') {
            window.web3.version.getNetwork(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(err, netId) {
                var accounts;
                return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                        return __WEBPACK_IMPORTED_MODULE_4__helpers_apiTokenERC20__["a" /* default */].getAccounts(window.web3.currentProvider);

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
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].pushRoute("/");
      }
    }), _temp));
  }

  _createClass(ViewToken, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var tokenAddress, networkId, summary, dimmerActive, contractError;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tokenAddress = this.props.url.query.tokenAddress;
                networkId = this.props.url.query.network;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__helpers_apiTokenERC20__["a" /* default */].getSummary(tokenAddress, networkId);

              case 4:
                summary = _context2.sent;
                this.setCheckNetworkInterval();
                dimmerActive = typeof summary.name == 'undefined';
                contractError = dimmerActive;
                this.setState({
                  summary: summary,
                  dimmerActive: dimmerActive,
                  contractError: contractError
                });

              case 9:
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Dimmer"], {
        active: dimmerActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, this.renderDimmerContent());
    }
  }, {
    key: "renderDimmerContent",
    value: function renderDimmerContent() {
      var contractError = this.state.contractError;

      if (contractError) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h2",
          icon: true,
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
          name: "broken chain",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), "Contract not found!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
          link: true,
          name: "reply",
          onClick: this.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
          size: "large",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
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
          description: "Total supply is " + __WEBPACK_IMPORTED_MODULE_5__helpers_solver__["a" /* default */].formatNumber(__WEBPACK_IMPORTED_MODULE_4__helpers_apiTokenERC20__["a" /* default */].convertToEther(summary.totalSupply)) + " " + summary.symbol + "s",
          extra: 'owner: ' + summary.owner
        }];
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          id: "summaryCard",
          items: items,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_BasicToken__["a" /* default */], {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      });
    }
  }, {
    key: "renderStandardToken",
    value: function renderStandardToken() {
      var _state2 = this.state,
          tokenAddress = _state2.tokenAddress,
          summary = _state2.summary,
          network = _state2.network;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_StandardToken__["a" /* default */], {
        tokenAddress: tokenAddress,
        summary: summary,
        network: network,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, this.renderDimmer(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, this.renderSummaryCard(), this.renderBasicToken(), this.renderStandardToken()));
    }
  }]);

  return ViewToken;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ViewToken);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('./', '/index').add('/token/view/:tokenAddress/:network', '/token/view');
module.exports = routes;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/token/view.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "numeral":
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "truffle-hdwallet-provider-privkey":
/***/ (function(module, exports) {

module.exports = require("truffle-hdwallet-provider-privkey");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=view.js.map