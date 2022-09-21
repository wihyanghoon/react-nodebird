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
/*! exports provided: initialState, REMOVE_IMAGES_SUCSESS, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, addPostAction, addCommentAction, default */
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
  upLoadImagesErr: null
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCommentPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLiketPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUpLoadImages)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRoIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxpa2VMb2FkaW5nIiwibGlrZURvbmUiLCJsaWtlRXJyb3IiLCJ1bkxpa2VMb2FkaW5nIiwidW5MaWtlRG9uZSIsInVuTGlrZUVycm9yIiwiYWRkUG9zdExvYWRkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyIiwicmVtb3ZlUG9zdExvYWRkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyIiwiYWRkQ29tbWVudExvYWRkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyIiwidXBMb2FkSW1hZ2VzTG9hZGRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyIiwiUkVNT1ZFX0lNQUdFU19TVUNTRVNTIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdEFjdGlvbiIsImRhdGEiLCJhZGRDb21tZW50QWN0aW9uIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpdGVtIiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZXJyIiwiaWQiLCJQb3N0SWQiLCJmaW5kIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwidiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnIiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVyciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyIiwiY2hhbmdlTmlja0xvYWRpbmciLCJjaGFuZ2VOaWNrRG9uZSIsImNoYW5nZU5pY2tFcnIiLCJmb2xsb3dpbmdMb2FkaW5nIiwiZm9sbG93aW5nRG9uZSIsImZvbGxvd2luZ0VyciIsInVuZm9sbG93aW5nTG9hZGluZyIsInVuZm9sbG93aW5nRG9uZSIsInVuZm9sbG93aW5nRXJyIiwibG9hZGZvbGxvd0xvYWRpbmciLCJsb2FkZm9sbG93RG9uZSIsImxvYWRmb2xsb3dFcnIiLCJsb2FkZm9sbG93aW5nTG9hZGluZyIsImxvYWRmb2xsb3dpbmdEb25lIiwibG9hZGZvbGxvd2luZ0VyciIsInJlbW92ZWZvbGxvd2VyTG9hZGluZyIsInJlbW92ZWZvbGxvd2VyRG9uZSIsInJlbW92ZWZvbGxvd2VyRXJyIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLX1JFUVVFU1QiLCJDSEFOR0VfTklDS19TVUNDRVNTIiwiQ0hBTkdFX05JQ0tfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTFdJTkdfUkVRVUVTVCIsIkxPQURfRk9MTFdJTkdfU1VDRVNTUyIsIkxPQURfRk9MTFdJTkdfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfVE9fTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJGb2xsb3dpbmdzIiwidXNlcklkIiwiRm9sbG93ZXJzIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJyZXNwb25zZSIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJVbkxpa2VQb3N0QVBJIiwiVW5MaWtlUG9zdCIsInVwTG9hZEltYWdlc0FQSSIsInVwTG9hZEltYWdlcyIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hDb21tZW50UG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZXRQb3N0Iiwid2F0Y2hVcExvYWRJbWFnZXMiLCJnZXRVc2VyQVBJIiwiZ2V0VXNlciIsImdldEZvbGx3ZXJBUEkiLCJnZXRGb2xsd2VyIiwiZ2V0Rm9sbG93aW5nQVBJIiwiZ2V0Rm9sbG93aW5nIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuRm9sbG93QVBJIiwidW5Gb2xsb3ciLCJjaGFuZWdlTmlja0FQSSIsImNoYW5lZ2VOaWNrIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hHZXRVc2VyIiwid2F0Y2hHZXRGb2xsb3ciLCJ3YXRjaEdldEZvbGxvd2luZyIsIndhdGNoQ2hhbmVnZU5pY2siLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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Q0gsQ0FaRDs7QUFjQSxNQUFNeE8sT0FBTyxHQUFHNE8sd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtFQUMxQ2EsS0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllN08sc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5cclxuLy8gKCDsnbTsoITsg4Htg5wsIOyVoeyFmCApID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHsgTElLRV9GQUlMVVJFLCBMSUtFX1JFUVVFU1QsIExJS0VfU1VDQ0VTUyB9IGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aDogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBsaWtlTG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlRG9uZTogZmFsc2UsXHJcbiAgICBsaWtlRXJyb3I6IG51bGwsXHJcbiAgICB1bkxpa2VMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVuTGlrZURvbmU6IGZhbHNlLFxyXG4gICAgdW5MaWtlRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnI6IG51bGwsXHJcbiAgICB1cExvYWRJbWFnZXNMb2FkZGluZzogZmFsc2UsXHJcbiAgICB1cExvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwTG9hZEltYWdlc0VycjogbnVsbCxcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXREZW1tdXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIEltYWdlczogW3tcclxuLy8gICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgICB9XSxcclxuLy8gICAgIENvbW1lbnRzOiBbe1xyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICB9XSxcclxuLy8gfSkpXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0VTX1NVQ1NFU1MgPSAnUkVNT1ZFX0lNQUdFU19TVUNTRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0VTX1NVQ1NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aCA9IGRyYWZ0LmltYWdlUGF0aC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkIH0pXHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVyciA9IGFjdGlvbi5lcnJvclxyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZURvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZUVycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VFcnJvciA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUVycm9yID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuTGlrZUxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5MaWtlTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bkxpa2VEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6E67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja0RvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja0VycjogbnVsbCxcclxuICAgIGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIHVuZm9sbG93aW5nTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyeiSDsoJzqsbBcclxuICAgIHVuZm9sbG93aW5nRG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd2luZ0VycjogbnVsbCxcclxuICAgIGxvYWRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuqqeuhnSDrtojrn6zsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkZm9sbG93RXJyOiBudWxsLFxyXG4gICAgbG9hZGZvbGxvd2luZ0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg66qp66GdIOu2iOufrOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRmb2xsb3dpbmdEb25lOiBmYWxzZSxcclxuICAgIGxvYWRmb2xsb3dpbmdFcnI6IG51bGwsXHJcbiAgICByZW1vdmVmb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7KCc6rGwIOyLnOuPhOykkVxyXG4gICAgcmVtb3ZlZm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZWZvbGxvd2VyRXJyOiBudWxsLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbi8v7JWh7IWYIO2DgOyehSDrs4DsiJgg7ISg7Ja4XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfUkVRVUVTVCA9ICdDSEFOR0VfTklDS19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tfRkFJTFVSRSA9ICdDSEFOR0VfTklDS19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUl9SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExXSU5HX1JFUVVFU1QgPSAnTE9BRF9GT0xMV0lOR19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMV0lOR19TVUNFU1NTID0gJ0xPQURfRk9MTFdJTkdfU1VDRVNTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTFdJTkdfRkFJTFVSRSA9ICdMT0FEX0ZPTExXSU5HX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9UT19NRSA9ICdSRU1PVkVfUE9TVF9UT19NRSdcclxuXHJcbi8v642U66+4642w7J207YSwXHJcblxyXG4vL+uhnOq3uOyduCDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+uhnOq3uOyVhOybgyDslaHshZhcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja0VyciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS51c2VySWQgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dpbmdEb25lID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nRXJyID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0RvbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dpbmdFcnIgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0RvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd0VyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dEb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckVyciA9IG51bGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZWZvbGxvd2VyRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVmb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlZm9sbG93ZXJFcnIgPSBhY3Rpb24uZXJyXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExXSU5HX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdEb25lID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRmb2xsb3dpbmdFcnIgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExXSU5HX1NVQ0VTU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkZm9sbG93aW5nRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMV0lOR19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZGZvbGxvd2luZ0VyciA9IGFjdGlvbi5lcnJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSdcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSwgLy8gY2FsbFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLCBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9UT19NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgY29uc29sZS5sb2codHlwZW9mIHJlc3VsdC5kYXRhLlBvc3RJZClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLlBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZSBgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVW5MaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIFVuTGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoVW5MaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cExvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBMb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwTG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb21tZW50UG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtldFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIFVuTGlrZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwTG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cExvYWRJbWFnZXMpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQ29tbWVudFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2V0UG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwTG9hZEltYWdlcyksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGRlbGF5LCBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XRVJfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTFdJTkdfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTFdJTkdfU1VDRVNTUyxcclxuICAgIExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9naW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0VXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChnZXRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb2xsd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VyJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEZvbGx3ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZ2V0Rm9sbHdlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvbGxvd2luZ0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmcnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Rm9sbG93aW5nKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGdldEZvbGxvd2luZ0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMV0lOR19TVUNFU1NTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTFdJTkdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEkgLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5lZ2VOaWNrQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lIDogZGF0YSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmVnZU5pY2soYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmVnZU5pY2tBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2luZ2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuRm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgZ2V0VXNlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoR2V0Rm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSX1JFUVVFU1QsIGdldEZvbGx3ZXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldEZvbGxvd2luZygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMV0lOR19SRVFVRVNULCBnZXRGb2xsb3dpbmcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5lZ2VOaWNrKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS19SRVFVRVNULCBjaGFuZWdlTmljaylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmVnZU5pY2spLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hHZXRGb2xsb3dpbmcpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9