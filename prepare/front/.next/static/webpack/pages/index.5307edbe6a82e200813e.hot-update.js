webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESSS", function() { return LOAD_USER_SUCCESSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICK_REQUEST", function() { return CHANGE_NICK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICK_SUCCESS", function() { return CHANGE_NICK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICK_FAILURE", function() { return CHANGE_NICK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_TO_ME", function() { return REMOVE_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInErr: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutErr: null,
  loadUserLoading: false,
  // 로그인 불러오기 시도중
  loadUserDone: false,
  loadUserErr: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpErr: null,
  changeNickLoading: false,
  // 닉네임변경 시도중
  changeNickDone: false,
  changeNickErr: null,
  followingLoading: false,
  // 팔로잉 시도중
  followingDone: false,
  followingErr: null,
  unfollowingLoading: false,
  // 언팔로잉 시도중
  unfollowingDone: false,
  unfollowingErr: null,
  me: null,
  signUpData: {},
  loginData: {}
}; //액션 타입 변수 선언

var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESSS = 'LOAD_USER_SUCCESSS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICK_REQUEST = 'CHANGE_NICK_REQUEST';
var CHANGE_NICK_SUCCESS = 'CHANGE_NICK_SUCCESS';
var CHANGE_NICK_FAILURE = 'CHANGE_NICK_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_TO_ME = 'REMOVE_POST_TO_ME'; //더미데이터
//로그인 액션

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
}; //로그아웃 액션

var logoutRequestAction = function logoutRequestAction(data) {
  return {
    type: LOG_OUT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInErr = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInErr = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutErr = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutErr = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserErr = null;
        break;

      case LOAD_USER_SUCCESSS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.me = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserErr = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpErr = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpErr = action.error;
        break;

      case CHANGE_NICK_REQUEST:
        draft.changeNickLoading = true;
        draft.changeNickDone = false;
        draft.changeNickErr = null;
        break;

      case CHANGE_NICK_SUCCESS:
        draft.changeNickLoading = false;
        draft.changeNickDone = true;
        draft.me.nickname = action.data.nickname;
        break;

      case CHANGE_NICK_FAILURE:
        draft.changeNickLoading = false;
        draft.changeNickErr = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followingLoading = true;
        draft.followingDone = false;
        draft.followingErr = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followingLoading = false;
        draft.followingDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followingLoading = false;
        draft.followingDone = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowingLoading = true;
        draft.unfollowingDone = false;
        draft.unfollowingErr = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = true;
        draft.me.Followings = draft.me.Followings.filter(function (item) {
          return item.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = action.error;
        break;

      case ADD_POST_TO_ME:
        console.log(action.data);
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_TO_ME:
        console.log(action.data);
        draft.me.Posts.pop(function (item) {
          return item.id !== action.data;
        });
        break;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVyciIsImNoYW5nZU5pY2tMb2FkaW5nIiwiY2hhbmdlTmlja0RvbmUiLCJjaGFuZ2VOaWNrRXJyIiwiZm9sbG93aW5nTG9hZGluZyIsImZvbGxvd2luZ0RvbmUiLCJmb2xsb3dpbmdFcnIiLCJ1bmZvbGxvd2luZ0xvYWRpbmciLCJ1bmZvbGxvd2luZ0RvbmUiLCJ1bmZvbGxvd2luZ0VyciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1NTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJuaWNrbmFtZSIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiaWQiLCJmaWx0ZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIlBvc3RzIiwidW5zaGlmdCIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDeEJDLFlBQVksRUFBRSxLQURVO0VBQ0g7RUFDckJDLFNBQVMsRUFBRSxLQUZhO0VBR3hCQyxRQUFRLEVBQUUsSUFIYztFQUl4QkMsYUFBYSxFQUFFLEtBSlM7RUFJRjtFQUN0QkMsVUFBVSxFQUFFLEtBTFk7RUFNeEJDLFNBQVMsRUFBRSxJQU5hO0VBT3hCQyxlQUFlLEVBQUUsS0FQTztFQU9BO0VBQ3hCQyxZQUFZLEVBQUUsS0FSVTtFQVN4QkMsV0FBVyxFQUFFLElBVFc7RUFVeEJDLGFBQWEsRUFBRSxLQVZTO0VBVUY7RUFDdEJDLFVBQVUsRUFBRSxLQVhZO0VBWXhCQyxTQUFTLEVBQUUsSUFaYTtFQWF4QkMsaUJBQWlCLEVBQUUsS0FiSztFQWFFO0VBQzFCQyxjQUFjLEVBQUUsS0FkUTtFQWV4QkMsYUFBYSxFQUFFLElBZlM7RUFnQnhCQyxnQkFBZ0IsRUFBRSxLQWhCTTtFQWdCQztFQUN6QkMsYUFBYSxFQUFFLEtBakJTO0VBa0J4QkMsWUFBWSxFQUFFLElBbEJVO0VBbUJ4QkMsa0JBQWtCLEVBQUUsS0FuQkk7RUFtQkc7RUFDM0JDLGVBQWUsRUFBRSxLQXBCTztFQXFCeEJDLGNBQWMsRUFBRSxJQXJCUTtFQXNCeEJDLEVBQUUsRUFBRSxJQXRC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UUFDQTs7TUFDSixLQUFLdUIsZ0JBQUw7UUFDSVksS0FBSyxDQUFDckMsa0JBQU4sR0FBMkIsS0FBM0I7UUFDQXFDLEtBQUssQ0FBQ3BDLGVBQU4sR0FBd0IsSUFBeEI7UUFDQW9DLEtBQUssQ0FBQ2xDLEVBQU4sQ0FBU3FDLFVBQVQsR0FBc0JILEtBQUssQ0FBQ2xDLEVBQU4sQ0FBU3FDLFVBQVQsQ0FBb0JHLE1BQXBCLENBQTJCLFVBQUNDLElBQUQ7VUFBQSxPQUFVQSxJQUFJLENBQUNGLEVBQUwsS0FBWVAsTUFBTSxDQUFDTCxJQUE3QjtRQUFBLENBQTNCLENBQXRCO1FBQ0E7O01BQ0osS0FBS0osZ0JBQUw7UUFDSVcsS0FBSyxDQUFDckMsa0JBQU4sR0FBMkIsS0FBM0I7UUFDQXFDLEtBQUssQ0FBQ3BDLGVBQU4sR0FBd0JrQyxNQUFNLENBQUNHLEtBQS9CO1FBQ0E7O01BQ0osS0FBS1gsY0FBTDtRQUNJa0IsT0FBTyxDQUFDQyxHQUFSLENBQVlYLE1BQU0sQ0FBQ0wsSUFBbkI7UUFDQU8sS0FBSyxDQUFDbEMsRUFBTixDQUFTNEMsS0FBVCxDQUFlQyxPQUFmLENBQXVCO1VBQUVOLEVBQUUsRUFBRVAsTUFBTSxDQUFDTDtRQUFiLENBQXZCO1FBQ0E7O01BQ0osS0FBS0YsaUJBQUw7UUFDSWlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFNLENBQUNMLElBQW5CO1FBQ0FPLEtBQUssQ0FBQ2xDLEVBQU4sQ0FBUzRDLEtBQVQsQ0FBZUUsR0FBZixDQUFtQixVQUFDTCxJQUFEO1VBQUEsT0FBVUEsSUFBSSxDQUFDRixFQUFMLEtBQVlQLE1BQU0sQ0FBQ0wsSUFBN0I7UUFBQSxDQUFuQjtRQUNBOztNQUNKO1FBQ0ksT0FBT0ksS0FBUDtJQTNHUjtFQTZHSCxDQTlHYSxDQUFkO0FBK0dILENBaEhEOztBQWtIZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTMwN2VkYmU2YTgyZTIwMDgxM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycjogbnVsbCxcclxuICAgIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnI6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnI6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tFcnI6IG51bGwsXHJcbiAgICBmb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOyLnOuPhOykkVxyXG4gICAgZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICB1bmZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsnokg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy/slaHshZgg7YOA7J6FIOuzgOyImCDshKDslrhcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1NTID0gJ0xPQURfVVNFUl9TVUNDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19SRVFVRVNUID0gJ0NIQU5HRV9OSUNLX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19TVUNDRVNTID0gJ0NIQU5HRV9OSUNLX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19GQUlMVVJFID0gJ0NIQU5HRV9OSUNLX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gJ1JFTU9WRV9QT1NUX1RPX01FJ1xyXG5cclxuLy/rjZTrr7jrjbDsnbTthLBcclxuXHJcbi8v66Gc6re47J24IOyVoeyFmFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v66Gc6re47JWE7JuDIOyVoeyFmFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5wb3AoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==