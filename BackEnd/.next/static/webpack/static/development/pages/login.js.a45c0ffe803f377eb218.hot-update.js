webpackHotUpdate("static/development/pages/login.js",{

/***/ "./Request/imw_request.js":
/*!********************************!*\
  !*** ./Request/imw_request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\"));\n\nmodule.exports = {\n  Send_Post_RestAPI: function Send_Post_RestAPI(url, data) {\n    return new Promise(function (resove, reject) {\n      var res = (0, _isomorphicUnfetch[\"default\"])(url, {\n        method: 'POST',\n        mode: 'cors',\n        headers: {\n          'Content-Type': 'application/json; charset=utf-8',\n          'Accept': 'application/json'\n        },\n        body: JSON.stringify({\n          data: data\n        })\n      }); //reject('error');\n\n      resove(res);\n    });\n  },\n  Send_Get_RestAPI: function Send_Get_RestAPI(url) {\n    return new Promise(function (resove, reject) {\n      var res = (0, _isomorphicUnfetch[\"default\"])(url, {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json; charset=utf-8',\n          'Accept': 'application/json'\n        }\n      }); //reject('error');\n\n      resove(res);\n    });\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXF1ZXN0L2ltd19yZXF1ZXN0LmpzPzM5OGYiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlNlbmRfUG9zdF9SZXN0QVBJIiwidXJsIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvdmUiLCJyZWplY3QiLCJyZXMiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiU2VuZF9HZXRfUmVzdEFQSSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsbUJBQWlCLEVBQUUsMkJBQVNDLEdBQVQsRUFBYUMsSUFBYixFQUFrQjtBQUNqQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDakMsVUFBTUMsR0FBRyxHQUFHLG1DQUFNTCxHQUFOLEVBQVU7QUFDbEJNLGNBQU0sRUFBRSxNQURVO0FBRWxCQyxZQUFJLEVBQUUsTUFGWTtBQUdsQkMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLGlDQURUO0FBRVAsb0JBQVU7QUFGSCxTQUhTO0FBT2xCQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNWLGNBQUksRUFBQ0E7QUFBTixTQUFmO0FBUFksT0FBVixDQUFaLENBRGlDLENBVWpDOztBQUNBRSxZQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILEtBWk0sQ0FBUDtBQWFILEdBZlk7QUFnQmJPLGtCQUFnQixFQUFFLDBCQUFTWixHQUFULEVBQWE7QUFDN0IsV0FBTyxJQUFJRSxPQUFKLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWtCO0FBQ2pDLFVBQU1DLEdBQUcsR0FBRyxtQ0FBTUwsR0FBTixFQUFVO0FBQ2xCTSxjQUFNLEVBQUUsS0FEVTtBQUVsQkUsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLGlDQURUO0FBRVAsb0JBQVU7QUFGSDtBQUZTLE9BQVYsQ0FBWixDQURpQyxDQVFqQzs7QUFDQUwsWUFBTSxDQUFDRSxHQUFELENBQU47QUFDSCxLQVZNLENBQVA7QUFXSDtBQTVCYyxDQUFqQiIsImZpbGUiOiIuL1JlcXVlc3QvaW13X3JlcXVlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU2VuZF9Qb3N0X1Jlc3RBUEk6IGZ1bmN0aW9uKHVybCxkYXRhKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKHVybCx7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2RhdGE6ZGF0YX0pXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXNvdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBTZW5kX0dldF9SZXN0QVBJOiBmdW5jdGlvbih1cmwpe1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcbiAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaCh1cmwse1xuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcbiAgICAgICAgICByZXNvdmUocmVzKTtcbiAgICAgIH0pO1xuICB9LFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Request/imw_request.js\n");

/***/ })

})