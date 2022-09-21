webpackHotUpdate_N_E("pages/profile",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWER_REQUEST, LOAD_FOLLOWER_SUCCESS, LOAD_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLWING_REQUEST, LOAD_FOLLWING_SUCESSS, LOAD_FOLLWING_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWER_REQUEST", function() { return LOAD_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWER_SUCCESS", function() { return LOAD_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWER_FAILURE", function() { return LOAD_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLWING_REQUEST", function() { return LOAD_FOLLWING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLWING_SUCESSS", function() { return LOAD_FOLLWING_SUCESSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLWING_FAILURE", function() { return LOAD_FOLLWING_FAILURE; });
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
  // 팔로잉 시도중
  unfollowingDone: false,
  unfollowingErr: null,
  loadfollowLoading: false,
  // 팔로우 목록 불러오기 시도중
  loadfollowDone: false,
  loadfollowErr: null,
  loadfollowingLoading: false,
  // 팔로잉 목록 불러오기 시도중
  loadfollowingDone: false,
  loadfollowingErr: null,
  removefollowerLoading: false,
  // 팔로워 제거
  removefollowerDone: false,
  removefollowerErr: null,
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
var LOAD_FOLLOWER_REQUEST = 'LOAD_FOLLOWER_REQUEST';
var LOAD_FOLLOWER_SUCCESS = 'LOAD_FOLLOWER_SUCCESS';
var LOAD_FOLLOWER_FAILURE = 'LOAD_FOLLOWER_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var LOAD_FOLLWING_REQUEST = 'LOAD_FOLLWING_REQUEST';
var LOAD_FOLLWING_SUCESSS = 'LOAD_FOLLWING_SUCESSS';
var LOAD_FOLLWING_FAILURE = 'LOAD_FOLLWING_FAILURE';
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
          id: action.data.userId
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
          return item.id !== action.data.userId;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowingLoading = false;
        draft.unfollowingErr = action.error;
        break;

      case LOAD_FOLLOWER_REQUEST:
        draft.loadfollowLoading = true;
        draft.loadfollowDone = false;
        draft.loadfollowErr = null;
        break;

      case LOAD_FOLLOWER_SUCCESS:
        draft.loadfollowLoading = false;
        draft.loadfollowDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWER_FAILURE:
        draft.loadfollowLoading = false;
        draft.loadfollowErr = action.err;
        break;

      case LOAD_FOLLWING_REQUEST:
        draft.loadfollowingLoading = true;
        draft.loadfollowingDone = false;
        draft.loadfollowingErr = null;
        break;

      case LOAD_FOLLWING_SUCESSS:
        draft.loadfollowingLoading = false;
        draft.loadfollowingDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLWING_FAILURE:
        draft.loadfollowingLoading = false;
        draft.loadfollowingErr = action.err;
        break;

      case ADD_POST_TO_ME:
        console.log(action.data);
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_TO_ME:
        console.log(action.data);
        draft.me.Posts = draft.me.Posts.filter(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVyciIsImNoYW5nZU5pY2tMb2FkaW5nIiwiY2hhbmdlTmlja0RvbmUiLCJjaGFuZ2VOaWNrRXJyIiwiZm9sbG93aW5nTG9hZGluZyIsImZvbGxvd2luZ0RvbmUiLCJmb2xsb3dpbmdFcnIiLCJ1bmZvbGxvd2luZ0xvYWRpbmciLCJ1bmZvbGxvd2luZ0RvbmUiLCJ1bmZvbGxvd2luZ0VyciIsImxvYWRmb2xsb3dMb2FkaW5nIiwibG9hZGZvbGxvd0RvbmUiLCJsb2FkZm9sbG93RXJyIiwibG9hZGZvbGxvd2luZ0xvYWRpbmciLCJsb2FkZm9sbG93aW5nRG9uZSIsImxvYWRmb2xsb3dpbmdFcnIiLCJyZW1vdmVmb2xsb3dlckxvYWRpbmciLCJyZW1vdmVmb2xsb3dlckRvbmUiLCJyZW1vdmVmb2xsb3dlckVyciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1NTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExXSU5HX1JFUVVFU1QiLCJMT0FEX0ZPTExXSU5HX1NVQ0VTU1MiLCJMT0FEX0ZPTExXSU5HX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJuaWNrbmFtZSIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiaWQiLCJ1c2VySWQiLCJmaWx0ZXIiLCJpdGVtIiwiRm9sbG93ZXJzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlBvc3RzIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDeEJDLFlBQVksRUFBRSxLQURVO0VBQ0g7RUFDckJDLFNBQVMsRUFBRSxLQUZhO0VBR3hCQyxRQUFRLEVBQUUsSUFI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M2QyZTNhYTNmNjdiOTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnI6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnI6IG51bGwsXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja0xvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoTrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrRXJyOiBudWxsLFxyXG4gICAgZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDsi5zrj4TspJFcclxuICAgIGZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgdW5mb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgbG9hZGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg66qp66GdIOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGxvYWRmb2xsb3dFcnI6IG51bGwsXHJcbiAgICBsb2FkZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDrqqnroZ0g67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZGZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHJlbW92ZWZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsoJzqsbBcclxuICAgIHJlbW92ZWZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVmb2xsb3dlckVycjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vL+yVoeyFmCDtg4DsnoUg67OA7IiYIOyEoOyWuFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1NTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19SRVFVRVNUID0gJ0xPQURfRk9MTFdJTkdfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfU1VDRVNTUyA9ICdMT0FEX0ZPTExXSU5HX1NVQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX0ZBSUxVUkUgPSAnTE9BRF9GT0xMV0lOR19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfVE9fTUUgPSAnUkVNT1ZFX1BPU1RfVE9fTUUnXHJcblxyXG4vL+uNlOuvuOuNsOydtO2EsFxyXG5cclxuLy/roZzqt7jsnbgg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuLy/roZzqt7jslYTsm4Mg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19TVUNFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTFdJTkdfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=