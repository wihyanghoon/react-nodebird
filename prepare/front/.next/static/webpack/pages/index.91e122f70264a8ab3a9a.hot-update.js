webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWER_REQUEST, LOAD_FOLLOWER_SUCCESS, LOAD_FOLLOWER_FAILURE, LOAD_FOLLWING_REQUEST, LOAD_FOLLWING_SUCESSS, LOAD_FOLLWING_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
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
  // 언팔로잉 시도중
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVyciIsImNoYW5nZU5pY2tMb2FkaW5nIiwiY2hhbmdlTmlja0RvbmUiLCJjaGFuZ2VOaWNrRXJyIiwiZm9sbG93aW5nTG9hZGluZyIsImZvbGxvd2luZ0RvbmUiLCJmb2xsb3dpbmdFcnIiLCJ1bmZvbGxvd2luZ0xvYWRpbmciLCJ1bmZvbGxvd2luZ0RvbmUiLCJ1bmZvbGxvd2luZ0VyciIsImxvYWRmb2xsb3dMb2FkaW5nIiwibG9hZGZvbGxvd0RvbmUiLCJsb2FkZm9sbG93RXJyIiwibG9hZGZvbGxvd2luZ0xvYWRpbmciLCJsb2FkZm9sbG93aW5nRG9uZSIsImxvYWRmb2xsb3dpbmdFcnIiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tfUkVRVUVTVCIsIkNIQU5HRV9OSUNLX1NVQ0NFU1MiLCJDSEFOR0VfTklDS19GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUl9TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMV0lOR19SRVFVRVNUIiwiTE9BRF9GT0xMV0lOR19TVUNFU1NTIiwiTE9BRF9GT0xMV0lOR19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9UT19NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwibmlja25hbWUiLCJGb2xsb3dpbmdzIiwicHVzaCIsImlkIiwidXNlcklkIiwiZmlsdGVyIiwiaXRlbSIsIkZvbGxvd2VycyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJQb3N0cyIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxZQUFZLEVBQUUsS0FEVTtFQUNIO0VBQ3JCQyxTQUFTLEVBQUUsS0FGYTtFQUd4QkMsUUFBUSxFQUFFLElBSGM7RUFJeEJDLGFBQWEsRUFBRSxLQUpTO0VBSUY7RUFDdEJDLFVBQVUsRUFBRSxLQUxZO0VBTXhCQyxTQUFTLEVBQUUsSUFOYTtFQU94QkMsZUFBZSxFQUFFLEtBUE87RUFPQTtFQUN4QkMsWUFBWSxFQUFFLEtBUlU7RUFTeEJDLFdBQVcsRUFBRSxJQVRXO0VBVXhCQyxhQUFhLEVB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N0I7UUFDQTJDLEtBQUssQ0FBQ3pDLGdCQUFOLEdBQXlCdUMsTUFBTSxDQUFDWSxHQUFoQztRQUNBOztNQUNKLEtBQUtwQixjQUFMO1FBQ0lxQixPQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBTSxDQUFDTCxJQUFuQjtRQUNBTyxLQUFLLENBQUN4QyxFQUFOLENBQVNxRCxLQUFULENBQWVDLE9BQWYsQ0FBdUI7VUFBRVQsRUFBRSxFQUFFUCxNQUFNLENBQUNMO1FBQWIsQ0FBdkI7UUFDQTs7TUFDSixLQUFLRixpQkFBTDtRQUNJb0IsT0FBTyxDQUFDQyxHQUFSLENBQVlkLE1BQU0sQ0FBQ0wsSUFBbkI7UUFDQU8sS0FBSyxDQUFDeEMsRUFBTixDQUFTcUQsS0FBVCxHQUFpQmIsS0FBSyxDQUFDeEMsRUFBTixDQUFTcUQsS0FBVCxDQUFlTixNQUFmLENBQXNCLFVBQUNDLElBQUQ7VUFBQSxPQUFVQSxJQUFJLENBQUNILEVBQUwsS0FBWVAsTUFBTSxDQUFDTCxJQUE3QjtRQUFBLENBQXRCLENBQWpCO1FBQ0E7O01BQ0o7UUFDSSxPQUFPSSxLQUFQO0lBdklSO0VBeUlILENBMUlhLENBQWQ7QUEySUgsQ0E1SUQ7O0FBOEllRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MWUxMjJmNzAyNjRhOGFiM2E5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6E67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja0RvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja0VycjogbnVsbCxcclxuICAgIGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHVuZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyeiSDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIGxvYWRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuqqeuhnSDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkZm9sbG93RXJyOiBudWxsLFxyXG4gICAgbG9hZGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg66qp66GdIOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGxvYWRmb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy/slaHshZgg7YOA7J6FIOuzgOyImCDshKDslrhcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1NTID0gJ0xPQURfVVNFUl9TVUNDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19SRVFVRVNUID0gJ0NIQU5HRV9OSUNLX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19TVUNDRVNTID0gJ0NIQU5HRV9OSUNLX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19GQUlMVVJFID0gJ0NIQU5HRV9OSUNLX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19SRVFVRVNUID0gJ0xPQURfRk9MTFdJTkdfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfU1VDRVNTUyA9ICdMT0FEX0ZPTExXSU5HX1NVQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX0ZBSUxVUkUgPSAnTE9BRF9GT0xMV0lOR19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfVE9fTUUgPSAnUkVNT1ZFX1BPU1RfVE9fTUUnXHJcblxyXG4vL+uNlOuvuOuNsOydtO2EsFxyXG5cclxuLy/roZzqt7jsnbgg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuLy/roZzqt7jslYTsm4Mg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19TVUNFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTFdJTkdfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=