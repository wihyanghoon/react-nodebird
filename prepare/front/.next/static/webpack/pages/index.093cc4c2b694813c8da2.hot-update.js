webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Desktop\\react-nodebird\\prepare\\front\\components\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followingLoading = _useSelector.followingLoading,
      unfollowingLoading = _useSelector.unfollowingLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (item) {
    return item.id === post.User.id;
  });
  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    return null;
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onFollow,
    loading: followingLoading || unfollowingLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : "팔로우");
};

_s(FollowButton, "Ig5HAdkhB2Lzz/Bwge/OIxx1J+Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = FollowButton;
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dpbmdMb2FkaW5nIiwidW5mb2xsb3dpbmdMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJpdGVtIiwiaWQiLCJVc2VyIiwib25Gb2xsb3ciLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiZGF0YSIsIkZPTExPV19SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXOztFQUVqQyxtQkFBcURDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWhFO0VBQUEsSUFBUUMsRUFBUixnQkFBUUEsRUFBUjtFQUFBLElBQVlDLGdCQUFaLGdCQUFZQSxnQkFBWjtFQUFBLElBQThCQyxrQkFBOUIsZ0JBQThCQSxrQkFBOUI7O0VBRUEsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtFQUVBLElBQU1DLFdBQVcsR0FBR0wsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVNLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxJQUFEO0lBQUEsT0FBVUEsSUFBSSxDQUFDQyxFQUFMLEtBQVliLElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUFoQztFQUFBLENBQXBCLENBQXBCO0VBRUEsSUFBTUUsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakMsSUFBSVAsV0FBSixFQUFpQjtNQUNmRixRQUFRLENBQUM7UUFDUFUsSUFBSSxFQUFFQywrREFEQztRQUVQQyxJQUFJLEVBQUVuQixJQUFJLENBQUNjLElBQUwsQ0FBVUQ7TUFGVCxDQUFELENBQVI7SUFJRCxDQUxELE1BS087TUFDTE4sUUFBUSxDQUFDO1FBQ1BVLElBQUksRUFBRUcsNkRBREM7UUFFUEQsSUFBSSxFQUFFbkIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO01BRlQsQ0FBRCxDQUFSO0lBSUQ7RUFDRixDQVoyQixFQVl6QixDQUFDSixXQUFELENBWnlCLENBQTVCOztFQWNBLElBQUdULElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUFWLEtBQWlCVCxFQUFFLENBQUNTLEVBQXZCLEVBQTBCO0lBQ3hCLE9BQU8sSUFBUDtFQUNEOztFQUVELE9BQ0UsTUFBQywyQ0FBRDtJQUFRLE9BQU8sRUFBRUUsUUFBakI7SUFBMkIsT0FBTyxFQUFFVixnQkFBZ0IsSUFBSUMsa0JBQXhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBNkVHLFdBQVcsR0FBRyxNQUFILEdBQVksS0FBcEcsQ0FERjtBQUdELENBN0JEOztHQUFNVixZO1VBRWlERSx1RCxFQUVwQ08sdUQ7OztLQUpiVCxZO0FBK0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTNjYzRjMmI2OTQ4MTNjOGRhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBtZSwgZm9sbG93aW5nTG9hZGluZywgdW5mb2xsb3dpbmdMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBvc3QuVXNlci5pZClcclxuXHJcbiAgY29uc3Qgb25Gb2xsb3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtpc0ZvbGxvd2luZ10pXHJcbiAgXHJcbiAgaWYocG9zdC5Vc2VyLmlkID09PSBtZS5pZCl7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gb25DbGljaz17b25Gb2xsb3d9IGxvYWRpbmc9e2ZvbGxvd2luZ0xvYWRpbmcgfHwgdW5mb2xsb3dpbmdMb2FkaW5nfT57aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn08L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=