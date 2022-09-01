webpackHotUpdate_N_E("pages/index",{

/***/ "./components/imagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/imagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Desktop\\react-nodebird\\prepare\\front\\components\\imagesZoom\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "imagesZoom__Overlay",
  componentId: "sc-ta7obc-0"
})(["position:fixed;z-index:99;top:0;left:0;right:0;bottom:0;"]);
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "imagesZoom__Header",
  componentId: "sc-ta7obc-1"
})(["background-color:#fff;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#000;}"]);
_c2 = Header;
var CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "imagesZoom__CloseBtn",
  componentId: "sc-ta7obc-2"
})([""]);
_c3 = CloseBtn;

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentSlise = _useState[0],
      setCurrentSlise = _useState[1];

  return __jsx(Overlay, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "\uC0C1\uC138\uC774\uBBF8\uC9C0"), __jsx(CloseBtn, {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "x")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlise(slide);
    },
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, images.map(function (item) {
    return __jsx("div", {
      key: item.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: item.src,
      alt: item.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    }));
  })))));
};

_s(ImagesZoom, "fCEvMM7Jv4z6ADW1Zr/GMhEo0Oc=");

_c4 = ImagesZoom;
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "CloseBtn");
$RefreshReg$(_c4, "ImagesZoom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDbG9zZUJ0biIsImJ1dHRvbiIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpc2UiLCJzZXRDdXJyZW50U2xpc2UiLCJzbGlkZSIsIm1hcCIsIml0ZW0iLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGdFQUFiO0tBQU1GLE87QUFTTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLE1BQVY7RUFBQTtFQUFBO0FBQUEscUhBQVo7TUFBTUQsTTtBQWNOLElBQU1FLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtFQUFBO0VBQUE7QUFBQSxRQUFkO01BQU1ELFE7O0FBSU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7RUFBQTs7RUFBQSxJQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0VBQUEsSUFBZEMsT0FBYyxRQUFkQSxPQUFjOztFQUN4QyxnQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtFQUFBLElBQU9DLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0EsT0FDSSxNQUFDLE9BQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsTUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0k7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxvQ0FESixFQUVJLE1BQUMsUUFBRDtJQUFVLE9BQU8sRUFBRUgsT0FBbkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxPQUZKLENBREosRUFLSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0k7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsa0RBQUQ7SUFDSSxZQUFZLEVBQUUsQ0FEbEI7SUFFSSxXQUFXLEVBQUUscUJBQUNJLEtBQUQ7TUFBQSxPQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7SUFBQSxDQUZqQjtJQUdJLFFBQVEsTUFIWjtJQUlJLE1BQU0sRUFBRSxLQUpaO0lBS0ksWUFBWSxFQUFFLENBTGxCO0lBTUksY0FBYyxFQUFFLENBTnBCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FRS0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtJQUFBLE9BQ1I7TUFBSyxHQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0k7TUFBSyxHQUFHLEVBQUVELElBQUksQ0FBQ0MsR0FBZjtNQUFvQixHQUFHLEVBQUVELElBQUksQ0FBQ0MsR0FBOUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURKLENBRFE7RUFBQSxDQUFYLENBUkwsQ0FESixDQURKLENBTEosQ0FESjtBQTBCSCxDQTVCRDs7R0FBTVQsVTs7TUFBQUEsVTtBQThCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTNlMzQ5YTRmOWY1MjVhY2E3YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG5gXHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDbG9zZUJ0biA9IHN0eWxlZC5idXR0b25gXHJcblxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHsgaW1hZ2VzLCBvbkNsb3NlIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpc2UsIHNldEN1cnJlbnRTbGlzZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3ZlcmxheT5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLjsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Png8L0Nsb3NlQnRuPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaXNlKHNsaWRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L092ZXJsYXk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb20iXSwic291cmNlUm9vdCI6IiJ9