webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Rates.js":
/*!*****************************!*\
  !*** ./components/Rates.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/CarlosGodoy/seir1118/unit2/next/nextLesson/testing/components/Rates.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;


var Rates =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Rates, _Component);

  function Rates(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Rates);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Rates).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updateCurrency", function (event) {
      _this.setState({
        currency: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value).toFixed(2) // currentTime: this.updateTime(this.props.rates.time_last_updated)

      });
    });

    _this.state = {
      currency: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(1).toFixed(2) // currentTime: ''

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Rates, [{
    key: "render",
    // updateTime = async (secs) => {
    //     let time = await new Date(1970, 0, 1)
    //     time.setSeconds(secs)
    //     return time
    // }
    // componentDidMount(){
    //     this.setState({
    //         currentTime: this.updateTime(this.props.rates.time_last_updated)
    //     })
    // }
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-110195783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("h4", {
        className: "jsx-110195783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "$1 ", this.props.rates.base, " is worth ", this.state.currency, " in", __jsx("select", {
        onChange: this.updateCurrency,
        className: "jsx-110195783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.props.rates.rates).map(function (key, index) {
        return __jsx("option", {
          value: _this2.props.rates.rates[key],
          className: "jsx-110195783",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, key);
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "110195783",
        __self: this
      }, "select.jsx-110195783{margin-left:3vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DYXJsb3NHb2RveS9zZWlyMTExOC91bml0Mi9uZXh0L25leHRMZXNzb24vdGVzdGluZy9jb21wb25lbnRzL1JhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDNEIsQUFHeUMsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9DYXJsb3NHb2RveS9zZWlyMTExOC91bml0Mi9uZXh0L25leHRMZXNzb24vdGVzdGluZy9jb21wb25lbnRzL1JhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUmF0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW5jeTogcGFyc2VGbG9hdCgxKS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgLy8gY3VycmVudFRpbWU6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW5jeSA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbmN5OiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRUaW1lOiB0aGlzLnVwZGF0ZVRpbWUodGhpcy5wcm9wcy5yYXRlcy50aW1lX2xhc3RfdXBkYXRlZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVUaW1lID0gYXN5bmMgKHNlY3MpID0+IHtcbiAgICAvLyAgICAgbGV0IHRpbWUgPSBhd2FpdCBuZXcgRGF0ZSgxOTcwLCAwLCAxKVxuICAgIC8vICAgICB0aW1lLnNldFNlY29uZHMoc2VjcylcbiAgICAvLyAgICAgcmV0dXJuIHRpbWVcbiAgICAvLyB9XG5cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGN1cnJlbnRUaW1lOiB0aGlzLnVwZGF0ZVRpbWUodGhpcy5wcm9wcy5yYXRlcy50aW1lX2xhc3RfdXBkYXRlZClcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPGg0PkN1cnJlbnQgdGltZToge3RoaXMuc3RhdGUuY3VycmVudFRpbWV9PC9oND4gKi99XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAkMSB7dGhpcy5wcm9wcy5yYXRlcy5iYXNlfSBpcyB3b3J0aCB7dGhpcy5zdGF0ZS5jdXJyZW5jeX0gaW5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy51cGRhdGVDdXJyZW5jeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5yYXRlcy5yYXRlcykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0aGlzLnByb3BzLnJhdGVzLnJhdGVzW2tleV19PntrZXl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGVzOyJdfQ== */\n/*@ sourceURL=/Users/CarlosGodoy/seir1118/unit2/next/nextLesson/testing/components/Rates.js */"));
    }
  }]);

  return Rates;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Rates);

/***/ })

})
//# sourceMappingURL=index.js.fa7dd640ece9114fa8b3.hot-update.js.map