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
/*! exports provided: initialState, REMOVE_IMAGES_SUCSESS, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPostAction, addCommentAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGES_SUCSESS", function() { return REMOVE_IMAGES_SUCSESS; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
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
  mainPosts: [],
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
  addCommentErr: null,
  upLoadImagesLoadding: false,
  upLoadImagesDone: false,
  upLoadImagesErr: null,
  retweetLoadding: false,
  retweetDone: false,
  retweetErr: null
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

const REMOVE_IMAGES_SUCSESS = 'REMOVE_IMAGES_SUCSESS';
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
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
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
      case RETWEET_REQUEST:
        draft.retweetLoadding = true;
        draft.retweetDone = false;
        draft.retweetErr = null;
        break;

      case RETWEET_SUCCESS:
        draft.retweetLoadding = false;
        draft.retweetDone = true;
        break;

      case RETWEET_FAILURE:
        draft.retweetLoadding = false;
        draft.retweetErr = action.err;
        break;

      case REMOVE_IMAGES_SUCSESS:
        console.log(action.data);
        draft.imagePath = draft.imagePath.filter((item, index) => index !== action.data);
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length === 10;
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
        draft.imagePath = [];
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
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.upLoadImagesLoadding = true;
        draft.upLoadImagesDone = false;
        draft.upLoadImagesErr = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.upLoadImagesLoadding = true;
        draft.upLoadImagesDone = false;
        draft.imagePath = action.data;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.upLoadImagesLoadding = false;
        draft.upLoadImagesErr = action.error;
        break;

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
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESSS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICK_REQUEST, CHANGE_NICK_SUCCESS, CHANGE_NICK_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWER_REQUEST, LOAD_FOLLOWER_SUCCESS, LOAD_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLWING_REQUEST, LOAD_FOLLWING_SUCESSS, LOAD_FOLLWING_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, loginRequestAction, logoutRequestAction, default */
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
const LOAD_FOLLOWER_REQUEST = 'LOAD_FOLLOWER_REQUEST';
const LOAD_FOLLOWER_SUCCESS = 'LOAD_FOLLOWER_SUCCESS';
const LOAD_FOLLOWER_FAILURE = 'LOAD_FOLLOWER_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLWING_REQUEST = 'LOAD_FOLLWING_REQUEST';
const LOAD_FOLLWING_SUCESSS = 'LOAD_FOLLWING_SUCESSS';
const LOAD_FOLLWING_FAILURE = 'LOAD_FOLLWING_FAILURE';
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
        draft.me.Followings = draft.me.Followings.filter(item => item.id !== action.data.userId);
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
        draft.me.Followers = draft.me.Followers.filter(item => item.id !== action.data.userId);
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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post', data);
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

function upLoadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post/images', data);
}

function* upLoadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(upLoadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
      data: err.response.data
    });
  }
}

function retweetApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post/${data}/retweet', data);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], retweet);
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

function* watchUpLoadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"], upLoadImages);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLiketPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUpLoadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
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

function getFollwerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/follower', data);
}

function* getFollwer(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollwerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function getFollowingAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/following', data);
}

function* getFollowing(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getFollowingAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_SUCESSS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_FAILURE"],
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

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}

function* unFollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unFollowAPI, action.data);
    yield console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
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

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/following`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    console.log(result);
    yield console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
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

function* watchGetFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWER_REQUEST"], getFollwer);
}

function* watchGetFollowing() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLWING_REQUEST"], getFollowing);
}

function* watchChanegeNick() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICK_REQUEST"], chanegeNick);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChanegeNick), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetFollowing)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRoIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxpa2VMb2FkaW5nIiwibGlrZURvbmUiLCJsaWtlRXJyb3IiLCJ1bkxpa2VMb2FkaW5nIiwidW5MaWtlRG9uZSIsInVuTGlrZUVycm9yIiwiYWRkUG9zdExvYWRkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyIiwicmVtb3ZlUG9zdExvYWRkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyIiwiYWRkQ29tbWVudExvYWRkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyIiwidXBMb2FkSW1hZ2VzTG9hZGRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyIiwicmV0d2VldExvYWRkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyIiwiUkVNT1ZFX0lNQUdFU19TVUNTRVNTIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiYWRkUG9zdEFjdGlvbiIsImRhdGEiLCJhZGRDb21tZW50QWN0aW9uIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpdGVtIiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiaWQiLCJQb3N0SWQiLCJmaW5kIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwidiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnIiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVyciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyIiwiY2hhbmdlTmlja0xvYWRpbmciLCJjaGFuZ2VOaWNrRG9uZSIsImNoYW5nZU5pY2tFcnIiLCJmb2xsb3dpbmdMb2FkaW5nIiwiZm9sbG93aW5nRG9uZSIsImZvbGxvd2luZ0VyciIsInVuZm9sbG93aW5nTG9hZGluZyIsInVuZm9sbG93aW5nRG9uZSIsInVuZm9sbG93aW5nRXJyIiwibG9hZGZvbGxvd0xvYWRpbmciLCJsb2FkZm9sbG93RG9uZSIsImxvYWRmb2xsb3dFcnIiLCJsb2FkZm9sbG93aW5nTG9hZGluZyIsImxvYWRmb2xsb3dpbmdEb25lIiwibG9hZGZvbGxvd2luZ0VyciIsInJlbW92ZWZvbGxvd2VyTG9hZGluZyIsInJlbW92ZWZvbGxvd2VyRG9uZSIsInJlbW92ZWZvbGxvd2VyRXJyIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLX1JFUVVFU1QiLCJDSEFOR0VfTklDS19TVUNDRVNTIiwiQ0hBTkdFX05JQ0tfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTFdJTkdfUkVRVUVTVCIsIkxPQURfRk9MTFdJTkdfU1VDRVNTUyIsIkxPQURfRk9MTFdJTkdfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJGb2xsb3dpbmdzIiwidXNlcklkIiwiRm9sbG93ZXJzIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJyZXNwb25zZSIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJVbkxpa2VQb3N0QVBJIiwiVW5MaWtlUG9zdCIsInVwTG9hZEltYWdlc0FQSSIsInVwTG9hZEltYWdlcyIsInJldHdlZXRBcGkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaENvbW1lbnRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtldFBvc3QiLCJ3YXRjaFVwTG9hZEltYWdlcyIsImdldFVzZXJBUEkiLCJnZXRVc2VyIiwiZ2V0Rm9sbHdlckFQSSIsImdldEZvbGx3ZXIiLCJnZXRGb2xsb3dpbmdBUEkiLCJnZXRGb2xsb3dpbmciLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsImNoYW5lZ2VOaWNrQVBJIiwiY2hhbmVnZU5pY2siLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaEdldFVzZXIiLCJ3YXRjaEdldEZvbGxvdyIsIndhdGNoR2V0Rm9sbG93aW5nIiwid2F0Y2hDaGFuZWdlTmljayIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3Mi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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLGNBQWMsR0FBRyxNQUFNO0VBQ3pCLE1BQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0VBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7RUFFQSxNQUFNRyxRQUFRLEdBQUcsUUFDZkMsU0FEZSxHQUVmQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnJCO0VBSUEsTUFBTUssS0FBSyxHQUFHQyxnRUFBVyxDQUFDOUssdURBQUQsRUFBVXlLLFFBQVYsQ0FBekI7RUFDQUksS0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJoRiw4Q0FBbkIsQ0FBakI7RUFFQSxPQUFPNkUsS0FBUDtBQUNILENBWkQ7O0FBY0EsTUFBTWpQLE9BQU8sR0FBR3FQLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7RUFDMUNhLEtBQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZXRQLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuXHJcbi8vICgg7J207KCE7IOB7YOcLCDslaHshZggKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgXHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlciIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCB7IExJS0VfRkFJTFVSRSwgTElLRV9SRVFVRVNULCBMSUtFX1NVQ0NFU1MgfSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGg6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgbGlrZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZURvbmU6IGZhbHNlLFxyXG4gICAgbGlrZUVycm9yOiBudWxsLFxyXG4gICAgdW5MaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgICB1bkxpa2VEb25lOiBmYWxzZSxcclxuICAgIHVuTGlrZUVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnI6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyOiBudWxsLFxyXG4gICAgdXBMb2FkSW1hZ2VzTG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cExvYWRJbWFnZXNFcnI6IG51bGwsXHJcbiAgICByZXR3ZWV0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICAgcmV0d2VldEVycjogbnVsbCxcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXREZW1tdXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIEltYWdlczogW3tcclxuLy8gICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgICB9XSxcclxuLy8gICAgIENvbW1lbnRzOiBbe1xyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICB9XSxcclxuLy8gfSkpXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0VTX1NVQ1NFU1MgPSAnUkVNT1ZFX0lNQUdFU19TVUNTRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRVNfU1VDU0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gZHJhZnQuaW1hZ2VQYXRoLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gW11cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVyciA9IGFjdGlvbi5lcnJcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gc3RhdGUubWFpblBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChpdGVtKSA9PiB7IHJldHVybiBpdGVtLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQgfSlcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyID0gYWN0aW9uLmVycm9yXHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRXJyb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZURvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRXJyb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZURvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGggPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnI6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnI6IG51bGwsXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja0xvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoTrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrRXJyOiBudWxsLFxyXG4gICAgZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDsi5zrj4TspJFcclxuICAgIGZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgdW5mb2xsb3dpbmdMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOygnOqxsFxyXG4gICAgdW5mb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93aW5nRXJyOiBudWxsLFxyXG4gICAgbG9hZGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg66qp66GdIOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGxvYWRmb2xsb3dFcnI6IG51bGwsXHJcbiAgICBsb2FkZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDrqqnroZ0g67aI65+s7Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZGZvbGxvd2luZ0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHJlbW92ZWZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsoJzqsbAg7Iuc64+E7KSRXHJcbiAgICByZW1vdmVmb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlZm9sbG93ZXJFcnI6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy/slaHshZgg7YOA7J6FIOuzgOyImCDshKDslrhcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1NTID0gJ0xPQURfVVNFUl9TVUNDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19SRVFVRVNUID0gJ0NIQU5HRV9OSUNLX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19TVUNDRVNTID0gJ0NIQU5HRV9OSUNLX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS19GQUlMVVJFID0gJ0NIQU5HRV9OSUNLX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfUkVRVUVTVCA9ICdMT0FEX0ZPTExXSU5HX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX1NVQ0VTU1MgPSAnTE9BRF9GT0xMV0lOR19TVUNFU1NTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19GQUlMVVJFID0gJ0xPQURfRk9MTFdJTkdfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1RPX01FID0gJ1JFTU9WRV9QT1NUX1RPX01FJ1xyXG5cclxuLy/rjZTrr7jrjbDsnbTthLBcclxuXHJcbi8v66Gc6re47J24IOyVoeyFmFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v66Gc6re47JWE7JuDIOyVoeyFmFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1NTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0RvbmUgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93RXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0VyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigoaXRlbSk9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckVyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTFdJTkdfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTFdJTkdfU1VDRVNTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExXSU5HX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRXJyID0gYWN0aW9uLmVyclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1J1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLCAvLyBjYWxsXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgZGVsYXksIGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICBSRVRXRUVUX1JFUVVFU1QsUkVUV0VFVF9TVUNDRVNTLFJFVFdFRVRfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfVE9fTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHR5cGVvZiByZXN1bHQuZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5Qb3N0SWRcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2UgYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuTGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBVbkxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFVuTGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBMb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwTG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cExvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENvbW1lbnRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2V0UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgVW5MaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBMb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwTG9hZEltYWdlcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDb21tZW50UG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuTGlrZXRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBMb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XRVJfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTFdJTkdfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTFdJTkdfU1VDRVNTUyxcclxuICAgIExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9naW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0VXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb2xsd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VyJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEZvbGx3ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZ2V0Rm9sbHdlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvbGxvd2luZ0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmcnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Rm9sbG93aW5nKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGdldEZvbGxvd2luZ0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMV0lOR19TVUNFU1NTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEkgLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5lZ2VOaWNrQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lIDogZGF0YSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmVnZU5pY2soYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmVnZU5pY2tBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2luZ2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuRm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgZ2V0VXNlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoR2V0Rm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSX1JFUVVFU1QsIGdldEZvbGx3ZXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldEZvbGxvd2luZygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMV0lOR19SRVFVRVNULCBnZXRGb2xsb3dpbmcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5lZ2VOaWNrKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS19SRVFVRVNULCBjaGFuZWdlTmljaylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmVnZU5pY2spLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRGb2xsb3dpbmcpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9