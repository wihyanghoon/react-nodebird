module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\react-nodebird\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // ( 이전상태, 액션 ) => 다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostAction", function() { return addPostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentAction", function() { return addCommentAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");




const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫번째 게실글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      },
      content: '우와우와'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'wi'
      },
      content: '힘내자'
    }],
    Likers: []
  }],
  imagePath: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  likeLoading: false,
  likeDone: false,
  likeError: null,
  unLikeLoading: false,
  unLikeDone: false,
  unLikeError: null,
  addPostLoadding: false,
  addPostDone: false,
  addPostErr: null,
  removePostLoadding: false,
  removePostDone: false,
  removePostErr: null,
  addCommentLoadding: false,
  addCommentDone: false,
  addCommentErr: null
}; // export const getDemmuyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }))

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const addPostAction = data => {
  return {
    type: ADD_POST_REQUEST,
    data
  };
};
const addCommentAction = data => {
  return {
    type: ADD_COMMENT_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoadding = true;
        draft.addPostDone = false;
        draft.addPostErr = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoadding = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoadding = false;
        draft.addPostErr = action.err;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoadding = true;
        draft.removePostDone = false;
        draft.removePostErr = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoadding = false;
        draft.removePostDone = true;
        draft.mainPosts = state.mainPosts.filter(item => item.id !== action.data.PostId);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoadding = false;
        draft.removePostErr = action.err;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoadding = true;
        draft.addCommentDone = false;
        draft.addCommentErr = null;
        break;

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(item => {
          return item.id === action.data.PostId;
        });
        post.Comments.unshift(action.data);
        draft.addCommentLoadding = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoadding = false;
        draft.addCommentErr = action.error;

      case LIKE_POST_REQUEST:
        draft.likeLoading = true;
        draft.likeDone = false;
        draft.likeError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          draft.likeLoading = false;
          draft.likeDone = true;
          const post = draft.mainPosts.find(item => item.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          break;
        }

      case LIKE_POST_FAILURE:
        draft.unLikeLoading = false;
        draft.unLikeError = true;

      case UNLIKE_POST_REQUEST:
        draft.unLikeLoading = true;
        draft.unLikeDone = false;
        draft.unLikeError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          draft.unLikeLoading = false;
          draft.unLikeDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unLikeLoading = false;
        draft.unLikeDone = true;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESSS = 'LOAD_USER_SUCCESSS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICK_REQUEST = 'CHANGE_NICK_REQUEST';
const CHANGE_NICK_SUCCESS = 'CHANGE_NICK_SUCCESS';
const CHANGE_NICK_FAILURE = 'CHANGE_NICK_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_TO_ME = 'REMOVE_POST_TO_ME'; //더미데이터
//로그인 액션

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
}; //로그아웃 액션

const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        draft.me.Followings = draft.me.Followings.filter(item => item.id !== action.data);
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
        draft.me.Posts = draft.me.Posts.filter(item => item.id !== action.data);
        break;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), // call
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);






function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post', {
    content: data
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  console.log(action.data);

  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield console.log(typeof result.data.PostId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_TO_ME"],
      data: result.data.PostId
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
    yield console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/post/${data}/like `, data);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function UnLikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}/like`);
}

function* UnLikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(UnLikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);
}

function* watchCommentPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLiketPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"], UnLikePost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLiketPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function getUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/login');
}

function* getUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESSS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logaout');
}

function* follow(action) {
  try {
    // const result = yield call(logOutAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unFollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logaout');
}

function* unFollow(action) {
  try {
    // const result = yield call(logOutAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function chanegeNickAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* chanegeNick(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(chanegeNickAPI, action.data);
    yield console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* watchGetUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], getUser);
}

function* watchChanegeNick() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_REQUEST"], chanegeNick);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChanegeNick)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);







const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["legacy_createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGgiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibGlrZUxvYWRpbmciLCJsaWtlRG9uZSIsImxpa2VFcnJvciIsInVuTGlrZUxvYWRpbmciLCJ1bkxpa2VEb25lIiwidW5MaWtlRXJyb3IiLCJhZGRQb3N0TG9hZGRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnIiLCJyZW1vdmVQb3N0TG9hZGRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnIiLCJhZGRDb21tZW50TG9hZGRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnIiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImFkZENvbW1lbnRBY3Rpb24iLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZXJyIiwiZmlsdGVyIiwiaXRlbSIsIlBvc3RJZCIsImZpbmQiLCJwdXNoIiwiVXNlcklkIiwidiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnIiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVyciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyIiwiY2hhbmdlTmlja0xvYWRpbmciLCJjaGFuZ2VOaWNrRG9uZSIsImNoYW5nZU5pY2tFcnIiLCJmb2xsb3dpbmdMb2FkaW5nIiwiZm9sbG93aW5nRG9uZSIsImZvbGxvd2luZ0VyciIsInVuZm9sbG93aW5nTG9hZGluZyIsInVuZm9sbG93aW5nRG9uZSIsInVuZm9sbG93aW5nRXJyIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLX1JFUVVFU1QiLCJDSEFOR0VfTklDS19TVUNDRVNTIiwiQ0hBTkdFX05JQ0tfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJwb3N0U2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInJlc3BvbnNlIiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIlVuTGlrZVBvc3RBUEkiLCJVbkxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaENvbW1lbnRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtldFBvc3QiLCJnZXRVc2VyQVBJIiwiZ2V0VXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJkZWxheSIsInVuRm9sbG93QVBJIiwidW5Gb2xsb3ciLCJjaGFuZWdlTmlja0FQSSIsImNoYW5lZ2VOaWNrIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaEdldFVzZXIiLCJ3YXRjaENoYW5lZ2VOaWNrIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwi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QUN4SSx1REFBRCxFQUFVbUksUUFBVixDQUF6QjtFQUNBSSxLQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQmxFLDhDQUFuQixDQUFqQjtFQUVBLE9BQU8rRCxLQUFQO0FBQ0gsQ0FaRDs7QUFjQSxNQUFNeE0sT0FBTyxHQUFHNE0sd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtFQUMxQ2EsS0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllN00sc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5cclxuLy8gKCDsnbTsoITsg4Htg5wsIOyVoeyFmCApID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgTElLRV9GQUlMVVJFLCBMSUtFX1JFUVVFU1QsIExJS0VfU1VDQ0VTUyB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuk6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICd3aScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftnpjrgrTsnpAnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIExpa2VyczpbXVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGg6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgbGlrZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZURvbmU6IGZhbHNlLFxyXG4gICAgbGlrZUVycm9yOiBudWxsLFxyXG4gICAgdW5MaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgICB1bkxpa2VEb25lOiBmYWxzZSxcclxuICAgIHVuTGlrZUVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnI6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyOiBudWxsLFxyXG59XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldERlbW11eVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6IFt7XHJcbi8vICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyB9KSlcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkIH0pXHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZURvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUVycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VFcnJvciA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnI6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnI6IG51bGwsXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja0xvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoTrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrRXJyOiBudWxsLFxyXG4gICAgZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDsi5zrj4TspJFcclxuICAgIGZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgdW5mb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7J6JIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbi8v7JWh7IWYIO2DgOyehSDrs4DsiJgg7ISg7Ja4XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfUkVRVUVTVCA9ICdDSEFOR0VfTklDS19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfRkFJTFVSRSA9ICdDSEFOR0VfTklDS19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9UT19NRSA9ICdSRU1PVkVfUE9TVF9UT19NRSdcclxuXHJcbi8v642U66+4642w7J207YSwXHJcblxyXG4vL+uhnOq3uOyduCDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+uhnOq3uOyVhOybgyDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1RPX01FOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSdcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSwgLy8gY2FsbFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLCBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX1RPX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgeyBjb250ZW50OiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2codHlwZW9mIHJlc3VsdC5kYXRhLlBvc3RJZClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLlBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZSBgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVW5MaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIFVuTGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoVW5MaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENvbW1lbnRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2V0UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgVW5MaWtlUG9zdClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDb21tZW50UG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuTGlrZXRQb3N0KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgZGVsYXksIGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9TVUNDRVNTUyxcclxuICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tfUkVRVUVTVCxcclxuICAgIENIQU5HRV9OSUNLX1NVQ0NFU1MsXHJcbiAgICBDSEFOR0VfTklDS19GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2dpbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRVc2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGdldFVzZXJBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2FvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2FvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZWdlTmlja0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZSA6IGRhdGEgfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5lZ2VOaWNrKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5lZ2VOaWNrQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5Gb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBnZXRVc2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZWdlTmljaygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tfUkVRVUVTVCwgY2hhbmVnZU5pY2spXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmVnZU5pY2spLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9