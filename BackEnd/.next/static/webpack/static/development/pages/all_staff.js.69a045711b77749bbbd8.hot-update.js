webpackHotUpdate("static\\development\\pages\\all_staff.js",{

/***/ "./pages/all_staff.js":
/*!****************************!*\
  !*** ./pages/all_staff.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ContainerComponents_allStaff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ContainerComponents/allStaff */ "./components/ContainerComponents/allStaff.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\Users\\Phuoc\\Desktop\\CDKTDL\\BackEnd\\pages\\all_staff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var AllStaff = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AllStaff, _React$Component);

  var _super = _createSuper(AllStaff);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AllStaff, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var res, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_13__["Send_Get_RestAPI"])('http://localhost:3001/staff');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", {
                  results: json,
                  header: 'List Staff'
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function AllStaff(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AllStaff);

    _this = _super.call(this, props);
    _this.state = {
      counters: 0,
      create: "thanh"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AllStaff, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }), __jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }), __jsx("meta", {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "description",
        content: "Responsive Admin Template",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "author",
        content: "SmartUniversity",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, "Qu\u1EA3n L\xFD \u0110\xE0o T\u1EA1o "), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "fonts/simple-line-icons/simple-line-icons.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "fonts/font-awesome/css/font-awesome.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "fonts/material-design-icons/material-icon.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/plugins/bootstrap/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/plugins/summernote/summernote.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../assets/plugins/material/material.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../assets/css/material_style.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/pages/inbox.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/theme_style.css",
        rel: "stylesheet",
        id: "rt_style_components",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/plugins.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/style.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/responsive.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/theme-color.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "../assets/img/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }), __jsx(_components_ContainerComponents_allStaff__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return AllStaff;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllStaff);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbGxfc3RhZmYuanMiXSwibmFtZXMiOlsiQWxsU3RhZmYiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzIiwianNvbiIsInJlc3VsdHMiLCJoZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwiY291bnRlcnMiLCJjcmVhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxROzs7Ozs7OzsrTkFFeUJDLEc7Ozs7Ozs7dUJBQ1RDLDhFQUFnQixDQUFDLDZCQUFELEM7OztBQUE1QkMsbUI7O3VCQUNhQSxHQUFHLENBQUNDLElBQUosRTs7O0FBQWJBLG9CO2lEQUdDO0FBQUNDLHlCQUFPLEVBQUdELElBQVg7QUFBa0JFLHdCQUFNLEVBQUU7QUFBMUIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdULG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxDQURDO0FBRVhDLFlBQU0sRUFBRTtBQUZHLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0sZUFBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFrQyxlQUFPLEVBQUMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBR0U7QUFBTSxlQUFPLEVBQUMscUNBQWQ7QUFBb0QsWUFBSSxFQUFDLFVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFyQkYsQ0FERixFQXdCRSxNQUFDLDJEQUFELHlGQUFZLEtBQUtILEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDRSxNQUFDLGlGQUFELHlGQUF1QixLQUFLQSxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0F4QkYsQ0FERjtBQWdDRDs7OztFQWxEb0JJLDRDQUFLLENBQUNDLFM7O0FBb0RkWix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWxsX3N0YWZmLmpzLjY5YTA0NTcxMWI3Nzc0OWJiYmQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFsbFN0YWZmQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9hbGxTdGFmZidcclxuaW1wb3J0IHtTZW5kX0dldF9SZXN0QVBJfSBmcm9tICcuLi9SZXF1ZXN0L2ltd19yZXF1ZXN0J1xyXG5cclxuXHJcbmNsYXNzIEFsbFN0YWZmIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGFmZicpLy90aGVtIHZvXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vanNvbiBjdWEgZSByYSByb2kgY29uIGdpIG51YVxyXG4gICAgLy9ubyB2YW4gY29uIGxvZ1xyXG4gICAgcmV0dXJuIHtyZXN1bHRzIDoganNvbiAsIGhlYWRlcjogJ0xpc3QgU3RhZmYnIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY291bnRlcnM6IDAsXHJcbiAgICAgIGNyZWF0ZTogXCJ0aGFuaFwiLFxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVzcG9uc2l2ZSBBZG1pbiBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNtYXJ0VW5pdmVyc2l0eVwiIC8+XHJcbiAgICAgICAgICA8dGl0bGU+UXXhuqNuIEzDvSDEkMOgbyBU4bqhbyA8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJmb250cy9zaW1wbGUtbGluZS1pY29ucy9zaW1wbGUtbGluZS1pY29ucy5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiZm9udHMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImZvbnRzL21hdGVyaWFsLWRlc2lnbi1pY29ucy9tYXRlcmlhbC1pY29uLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9zdW1tZXJub3RlL3N1bW1lcm5vdGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL21hdGVyaWFsL21hdGVyaWFsLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9hc3NldHMvY3NzL21hdGVyaWFsX3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLi4vYXNzZXRzL2Nzcy9wYWdlcy9pbmJveC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLi4vYXNzZXRzL2Nzcy90aGVtZS9saWdodC90aGVtZV9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJydF9zdHlsZV9jb21wb25lbnRzXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvY3NzL3BsdWdpbnMubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvdGhlbWUvbGlnaHQvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiLi4vYXNzZXRzL2Nzcy9yZXNwb25zaXZlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvdGhlbWUvbGlnaHQvdGhlbWUtY29sb3IuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi4uL2Fzc2V0cy9pbWcvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgIDxBbGxTdGFmZkNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFsbFN0YWZmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9