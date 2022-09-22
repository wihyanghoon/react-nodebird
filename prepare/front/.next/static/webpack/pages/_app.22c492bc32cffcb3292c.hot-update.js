webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MYINFO_REQUEST, LOAD_MYINFO_SUCCESSS, LOAD_MYINFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWER_REQUEST, LOAD_FOLLOWER_SUCCESS, LOAD_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLWING_REQUEST, LOAD_FOLLWING_SUCESSS, LOAD_FOLLWING_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_REQUEST", function() { return LOAD_MYINFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_SUCCESSS", function() { return LOAD_MYINFO_SUCCESSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MYINFO_FAILURE", function() { return LOAD_MYINFO_FAILURE; });
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
  loadMyInfoLoading: false,
  // 로그인 불러오기 시도중
  loadMyInfoDone: false,
  loadMyInfoErr: null,
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
  // 팔로잉 제거
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
  // 팔로워 제거 시도중
  removefollowerDone: false,
  removefollowerErr: null,
  me: null
}; //액션 타입 변수 선언

var LOAD_MYINFO_REQUEST = 'LOAD_MYINFO_REQUEST';
var LOAD_MYINFO_SUCCESSS = 'LOAD_MYINFO_SUCCESSS';
var LOAD_MYINFO_FAILURE = 'LOAD_MYINFO_FAILURE';
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
      case LOAD_MYINFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoErr = null;

      case LOAD_MYINFO_SUCCESSS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;

      case LOAD_MYINFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoErr = null;

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

      case REMOVE_FOLLOWER_REQUEST:
        draft.removefollowerLoading = true;
        draft.removefollowerDone = false;
        draft.removefollowerErr = null;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removefollowerLoading = false;
        draft.removefollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(function (item) {
          return item.id !== action.data.userId;
        });
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removefollowerLoading = false;
        draft.removefollowerErr = action.err;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0VyciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnIiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVyciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyIiwiY2hhbmdlTmlja0xvYWRpbmciLCJjaGFuZ2VOaWNrRG9uZSIsImNoYW5nZU5pY2tFcnIiLCJmb2xsb3dpbmdMb2FkaW5nIiwiZm9sbG93aW5nRG9uZSIsImZvbGxvd2luZ0VyciIsInVuZm9sbG93aW5nTG9hZGluZyIsInVuZm9sbG93aW5nRG9uZSIsInVuZm9sbG93aW5nRXJyIiwibG9hZGZvbGxvd0xvYWRpbmciLCJsb2FkZm9sbG93RG9uZSIsImxvYWRmb2xsb3dFcnIiLCJsb2FkZm9sbG93aW5nTG9hZGluZyIsImxvYWRmb2xsb3dpbmdEb25lIiwibG9hZGZvbGxvd2luZ0VyciIsInJlbW92ZWZvbGxvd2VyTG9hZGluZyIsInJlbW92ZWZvbGxvd2VyRG9uZSIsInJlbW92ZWZvbGxvd2VyRXJyIiwibWUiLCJMT0FEX01ZSU5GT19SRVFVRVNUIiwiTE9BRF9NWUlORk9fU1VDQ0VTU1MiLCJMT0FEX01ZSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLX1JFUVVFU1QiLCJDSEFOR0VfTklDS19TVUNDRVNTIiwiQ0hBTkdFX05JQ0tfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTFdJTkdfUkVRVUVTVCIsIkxPQURfRk9MTFdJTkdfU1VDRVNTUyIsIkxPQURfRk9MTFdJTkdfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsIm5pY2tuYW1lIiwiRm9sbG93aW5ncyIsInB1c2giLCJpZCIsInVzZXJJZCIsImZpbHRlciIsIml0ZW0iLCJGb2xsb3dlcnMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUG9zdHMiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFlTixNQUFmLENBQXNCLFVBQUNDLElBQUQ7VUFBQSxPQUFVQSxJQUFJLENBQUNILEVBQUwsS0FBWVAsTUFBTSxDQUFDTCxJQUE3QjtRQUFBLENBQXRCLENBQWpCO1FBQ0E7O01BQ0o7UUFDSSxPQUFPSSxLQUFQO0lBaEtSO0VBa0tILENBbkthLENBQWQ7QUFvS0gsQ0FyS0Q7O0FBdUtlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyYzQ5MmJjMzJjZmZjYjMyOTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6E67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja0RvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja0VycjogbnVsbCxcclxuICAgIGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHVuZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDsoJzqsbBcclxuICAgIHVuZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIGxvYWRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuqqeuhnSDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkZm9sbG93RXJyOiBudWxsLFxyXG4gICAgbG9hZGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg66qp66GdIOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGxvYWRmb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICByZW1vdmVmb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7KCc6rGwIOyLnOuPhOykkVxyXG4gICAgcmVtb3ZlZm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZWZvbGxvd2VyRXJyOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbn1cclxuXHJcbi8v7JWh7IWYIO2DgOyehSDrs4DsiJgg7ISg7Ja4XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19SRVFVRVNUID0gJ0xPQURfTVlJTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19TVUNDRVNTUyA9ICdMT0FEX01ZSU5GT19TVUNDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlJTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWUlORk9fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfUkVRVUVTVCA9ICdDSEFOR0VfTklDS19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfRkFJTFVSRSA9ICdDSEFOR0VfTklDS19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX1JFUVVFU1QgPSAnTE9BRF9GT0xMV0lOR19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19TVUNFU1NTID0gJ0xPQURfRk9MTFdJTkdfU1VDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfRkFJTFVSRSA9ICdMT0FEX0ZPTExXSU5HX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9UT19NRSA9ICdSRU1PVkVfUE9TVF9UT19NRSdcclxuXHJcbi8v642U66+4642w7J207YSwXHJcblxyXG4vL+uhnOq3uOyduCDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+uhnOq3uOyVhOybgyDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyID0gbnVsbFxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlJTkZPX1NVQ0NFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWUlORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnIgPSBudWxsXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKChpdGVtKT0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19TVUNFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTFdJTkdfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=