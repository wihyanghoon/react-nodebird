webpackHotUpdate_N_E("pages/index",{

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
  me: null,
  userInfo: null
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
        draft.loadMyInfoErr = action.error;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0VyciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnIiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVyciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyIiwiY2hhbmdlTmlja0xvYWRpbmciLCJjaGFuZ2VOaWNrRG9uZSIsImNoYW5nZU5pY2tFcnIiLCJmb2xsb3dpbmdMb2FkaW5nIiwiZm9sbG93aW5nRG9uZSIsImZvbGxvd2luZ0VyciIsInVuZm9sbG93aW5nTG9hZGluZyIsInVuZm9sbG93aW5nRG9uZSIsInVuZm9sbG93aW5nRXJyIiwibG9hZGZvbGxvd0xvYWRpbmciLCJsb2FkZm9sbG93RG9uZSIsImxvYWRmb2xsb3dFcnIiLCJsb2FkZm9sbG93aW5nTG9hZGluZyIsImxvYWRmb2xsb3dpbmdEb25lIiwibG9hZGZvbGxvd2luZ0VyciIsInJlbW92ZWZvbGxvd2VyTG9hZGluZyIsInJlbW92ZWZvbGxvd2VyRG9uZSIsInJlbW92ZWZvbGxvd2VyRXJyIiwibWUiLCJ1c2VySW5mbyIsIkxPQURfTVlJTkZPX1JFUVVFU1QiLCJMT0FEX01ZSU5GT19TVUNDRVNTUyIsIkxPQURfTVlJTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tfUkVRVUVTVCIsIkNIQU5HRV9OSUNLX1NVQ0NFU1MiLCJDSEFOR0VfTklDS19GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUl9TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUl9GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMV0lOR19SRVFVRVNUIiwiTE9BRF9GT0xMV0lOR19TVUNFU1NTIiwiTE9BRF9GT0xMV0lOR19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9UT19NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwibmlja25hbWUiLCJGb2xsb3dpbmdzIiwicHVzaCIsImlkIiwidXNlcklkIiwiZmlsdGVyIiwiaXRlbSIsIkZvbGxvd2VycyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJQb3N0cyIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFTMEQsS0FBVCxHQUFpQmIsS0FBSyxDQUFDN0MsRUFBTixDQUFTMEQsS0FBVCxDQUFlTixNQUFmLENBQXNCLFVBQUNDLElBQUQ7VUFBQSxPQUFVQSxJQUFJLENBQUNILEVBQUwsS0FBWVAsTUFBTSxDQUFDTCxJQUE3QjtRQUFBLENBQXRCLENBQWpCO1FBQ0E7O01BQ0o7UUFDSSxPQUFPSSxLQUFQO0lBaEtSO0VBa0tILENBbkthLENBQWQ7QUFvS0gsQ0FyS0Q7O0FBdUtlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YTI2MjUyMDEyMDMwZDUwNDkwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0VycjogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycjogbnVsbCxcclxuICAgIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnI6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnI6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tFcnI6IG51bGwsXHJcbiAgICBmb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOyLnOuPhOykkVxyXG4gICAgZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICB1bmZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7KCc6rGwXHJcbiAgICB1bmZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICBsb2FkZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDrqqnroZ0g67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZGZvbGxvd0VycjogbnVsbCxcclxuICAgIGxvYWRmb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOuqqeuhnSDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgcmVtb3ZlZm9sbG93ZXJMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOygnOqxsCDsi5zrj4TspJFcclxuICAgIHJlbW92ZWZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVmb2xsb3dlckVycjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgdXNlckluZm86IG51bGwsXHJcbn1cclxuXHJcbi8v7JWh7IWYIO2DgOyehSDrs4DsiJgg7ISg7Ja4XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19SRVFVRVNUID0gJ0xPQURfTVlJTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZSU5GT19TVUNDRVNTUyA9ICdMT0FEX01ZSU5GT19TVUNDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlJTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWUlORk9fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfUkVRVUVTVCA9ICdDSEFOR0VfTklDS19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfRkFJTFVSRSA9ICdDSEFOR0VfTklDS19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX1JFUVVFU1QgPSAnTE9BRF9GT0xMV0lOR19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19TVUNFU1NTID0gJ0xPQURfRk9MTFdJTkdfU1VDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfRkFJTFVSRSA9ICdMT0FEX0ZPTExXSU5HX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9UT19NRSA9ICdSRU1PVkVfUE9TVF9UT19NRSdcclxuXHJcbi8v642U66+4642w7J207YSwXHJcblxyXG4vL+uhnOq3uOyduCDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+uhnOq3uOyVhOybgyDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyID0gbnVsbFxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlJTkZPX1NVQ0NFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWUlORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS51c2VySWQgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExXSU5HX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExXSU5HX1NVQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0VyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==