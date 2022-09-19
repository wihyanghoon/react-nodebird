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
  console.log(data);
  return {
    type: ADD_POST_REQUEST,
    data
  };
};
const addCommentAction = data => {
  console.log(data);
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
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_TO_ME:
        draft.me.Posts.filter(item => item.id !== action.data);
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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_TO_ME"],
      data: result.data
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

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetUser)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGgiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibGlrZUxvYWRpbmciLCJsaWtlRG9uZSIsImxpa2VFcnJvciIsInVuTGlrZUxvYWRpbmciLCJ1bkxpa2VEb25lIiwidW5MaWtlRXJyb3IiLCJhZGRQb3N0TG9hZGRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnIiLCJyZW1vdmVQb3N0TG9hZGRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnIiLCJhZGRDb21tZW50TG9hZGRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnIiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0QWN0aW9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRDb21tZW50QWN0aW9uIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImVyciIsImZpbHRlciIsIml0ZW0iLCJQb3N0SWQiLCJmaW5kIiwicHVzaCIsIlVzZXJJZCIsInYiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVyciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVyciIsImNoYW5nZU5pY2tMb2FkaW5nIiwiY2hhbmdlTmlja0RvbmUiLCJjaGFuZ2VOaWNrRXJyIiwiZm9sbG93aW5nTG9hZGluZyIsImZvbGxvd2luZ0RvbmUiLCJmb2xsb3dpbmdFcnIiLCJ1bmZvbGxvd2luZ0xvYWRpbmciLCJ1bmZvbGxvd2luZ0RvbmUiLCJ1bmZvbGxvd2luZ0VyciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1NTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX1RPX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2luZ3MiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJwb3N0U2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInJlc3BvbnNlIiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIlVuTGlrZVBvc3RBUEkiLCJVbkxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaENvbW1lbnRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtldFBvc3QiLCJnZXRVc2VyQVBJIiwiZ2V0VXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJkZWxheSIsInVuRm9sbG93QVBJIiwidW5Gb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoR2V0VXNlciIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztR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QVpEOztBQWNBLE1BQU1yTSxPQUFPLEdBQUd5TSx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0VBQzFDYSxLQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWUxTSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnXHJcblxyXG4vLyAoIOydtOyghOyDge2DnCwg7JWh7IWYICkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIFxyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgeyBMSUtFX0ZBSUxVUkUsIExJS0VfUkVRVUVTVCwgTElLRV9TVUNDRVNTIH0gZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyq+uyiOynuCDqsozsi6TquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgOyasOyZgCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3dpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2emOuCtOyekCcsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgTGlrZXJzOltdXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBsaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlRG9uZTogZmFsc2UsXHJcbiAgICBsaWtlRXJyb3I6IG51bGwsXHJcbiAgICB1bkxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVuTGlrZURvbmU6IGZhbHNlLFxyXG4gICAgdW5MaWtlRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnI6IG51bGwsXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGVtbXV5UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vIH0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyID0gYWN0aW9uLmVyclxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCB9KVxyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBhY3Rpb24uZXJyb3JcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VFcnJvciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZURvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRXJyb3IgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VFcnJvciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZURvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRG9uZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6E67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja0RvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja0VycjogbnVsbCxcclxuICAgIGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHVuZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyeiSDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vL+yVoeyFmCDtg4DsnoUg67OA7IiYIOyEoOyWuFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1NTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfVE9fTUUgPSAnUkVNT1ZFX1BPU1RfVE9fTUUnXHJcblxyXG4vL+uNlOuvuOuNsOydtO2EsFxyXG5cclxuLy/roZzqt7jsnbgg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuLy/roZzqt7jslYTsm4Mg7JWh7IWYXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSdcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSwgLy8gY2FsbFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLCBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX1RPX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgeyBjb250ZW50OiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2UgYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuTGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBVbkxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFVuTGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb21tZW50UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtldFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIFVuTGlrZVBvc3QpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQ29tbWVudFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2V0UG9zdCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9naW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0VXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dhb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dhb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5Gb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBnZXRVc2VyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoR2V0VXNlciksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBsZWdhY3lfY3JlYXRlU3RvcmUgYXMgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcblxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXHJcbiAgICBcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=