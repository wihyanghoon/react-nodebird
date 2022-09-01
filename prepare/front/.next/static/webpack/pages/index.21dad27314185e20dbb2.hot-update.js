webpackHotUpdate_N_E("pages/index",{

/***/ "./components/imagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/imagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Desktop\\react-nodebird\\prepare\\front\\components\\imagesZoom\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "imagesZoom__Overlay",
  componentId: "sc-ta7obc-0"
})(["position:fixed;z-index:99;top:0;left:0;right:0;bottom:0;"]);
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header.withConfig({
  displayName: "imagesZoom__Header",
  componentId: "sc-ta7obc-1"
})(["background-color:#fff;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#000;}"]);
_c2 = Header;
var CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "imagesZoom__CloseBtn",
  componentId: "sc-ta7obc-2"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
_c3 = CloseBtn;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "imagesZoom__SlickWrapper",
  componentId: "sc-ta7obc-3"
})(["height:calc(100% - 44px);background-color:#090909;"]);
_c4 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "imagesZoom__ImgWrapper",
  componentId: "sc-ta7obc-4"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-width:750px;}"]);
_c5 = ImgWrapper;
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "imagesZoom__Indicator",
  componentId: "sc-ta7obc-5"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    .slick-slide {\n        display: inline-block;\n    }\n"])));
_c6 = Global;

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlise = _useState[0],
      setCurrentSlise = _useState[1];

  return __jsx(Overlay, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(Global, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "\uC0C1\uC138\uC774\uBBF8\uC9C0"), __jsx(CloseBtn, {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "x")), __jsx(SlickWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 86,
      columnNumber: 21
    }
  }, images.map(function (item) {
    return __jsx(ImgWrapper, {
      key: item.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: item.src,
      alt: item.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 33
      }
    }));
  })))));
};

_s(ImagesZoom, "fCEvMM7Jv4z6ADW1Zr/GMhEo0Oc=");

_c7 = ImagesZoom;
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "CloseBtn");
$RefreshReg$(_c4, "SlickWrapper");
$RefreshReg$(_c5, "ImgWrapper");
$RefreshReg$(_c6, "Global");
$RefreshReg$(_c7, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJDbG9zZUJ0biIsImJ1dHRvbiIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbmRpY2F0b3IiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpc2UiLCJzZXRDdXJyZW50U2xpc2UiLCJzbGlkZSIsIm1hcCIsIml0ZW0iLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnRUFBYjtLQUFNRixPO0FBU04sSUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxNQUFWO0VBQUE7RUFBQTtBQUFBLHFIQUFaO01BQU1ELE07QUFjTixJQUFNRSxRQUFRLEdBQUdKLHlEQUFNLENBQUNLLE1BQVY7RUFBQTtFQUFBO0FBQUEscUZBQWQ7TUFBTUQsUTtBQVNOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwwREFBbEI7TUFBTUssWTtBQUtOLElBQU1DLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw0RUFBaEI7TUFBTU0sVTtBQVVOLElBQU1DLFNBQVMsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxtTEFBZjtBQWdCQSxJQUFNUSxNQUFNLEdBQUdDLDJFQUFILDRNQUFaO01BQU1ELE07O0FBTU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7RUFBQTs7RUFBQSxJQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0VBQUEsSUFBZEMsT0FBYyxRQUFkQSxPQUFjOztFQUN4QyxnQkFBd0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtFQUFBLElBQU9DLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0EsT0FDSSxNQUFDLE9BQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsTUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosRUFFSSxNQUFDLE1BQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsb0NBREosRUFFSSxNQUFDLFFBQUQ7SUFBVSxPQUFPLEVBQUVILE9BQW5CO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsT0FGSixDQUZKLEVBTUksTUFBQyxZQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyxrREFBRDtJQUNJLFlBQVksRUFBRSxDQURsQjtJQUVJLFdBQVcsRUFBRSxxQkFBQ0ksS0FBRDtNQUFBLE9BQVdELGVBQWUsQ0FBQ0MsS0FBRCxDQUExQjtJQUFBLENBRmpCO0lBR0ksUUFBUSxNQUhaO0lBSUksTUFBTSxFQUFFLEtBSlo7SUFLSSxZQUFZLEVBQUUsQ0FMbEI7SUFNSSxjQUFjLEVBQUUsQ0FOcEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQVFLTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0lBQUEsT0FDUixNQUFDLFVBQUQ7TUFBWSxHQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBdEI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNJO01BQUssR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQWY7TUFBb0IsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQTlCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFESixDQURRO0VBQUEsQ0FBWCxDQVJMLENBREosQ0FESixDQU5KLENBREo7QUEyQkgsQ0E3QkQ7O0dBQU1ULFU7O01BQUFBLFU7QUErQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxZGFkMjczMTQxODVlMjBkYmIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljaydcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG5gXHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG5cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDkwOTtcclxuYFxyXG5cclxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAmID4gZGl2IHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5zbGljay1zbGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHsgaW1hZ2VzLCBvbkNsb3NlIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpc2UsIHNldEN1cnJlbnRTbGlzZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3ZlcmxheT5cclxuICAgICAgICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPuyDgeyEuOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+eDwvQ2xvc2VCdG4+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpc2Uoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17aXRlbS5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgICA8L092ZXJsYXk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb20iXSwic291cmNlUm9vdCI6IiJ9