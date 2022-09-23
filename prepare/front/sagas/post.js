import { all, fork, put, throttle, takeLatest, call } from "redux-saga/effects";
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE
} from '../reducers/post'

import { ADD_POST_TO_ME, REMOVE_POST_TO_ME } from "../reducers/user";
import axios from "axios";
import shortId from 'shortid';

// 리트윗 시작
function retweetApi(data) {
    return axios.post(`/post/${data}/retweet`);
}

function* retweet(action) {
    try {
        const result = yield call(retweetApi, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}
// 리트윗 끝


// 이미지 업로드 시작
function upLoadImagesAPI(data) {
    return axios.post('/post/images', data);
}

function* upLoadImages(action) {
    try {
        const result = yield call(upLoadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}
// 이미지 업로드 끝

// 좋아요 포스트 시작
function likePostAPI(data) {
    return axios.patch(`/post/${data}/like `, data);
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            data: err.response.data,
        });
    }
}
// 좋아요 포스트 끝

// 좋아요 삭제 시작
function UnLikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}

function* UnLikePost(action) {
    try {
        const result = yield call(UnLikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
// 좋아요 삭제 끝

// 게시글 하나 불러오기 시작
function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        });
    }
}
// 게시글 하나 불러오기 끝

// 게시글 여러개 불러오기 시작
function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}
// 게시글 여러개 불러오기 끝

// 게시글 저장 시작
function addPostAPI(data) {
    return axios.post('/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield console.log(result)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}
// 게시글 저장 끝

// 게시글 삭제 시작
function removePostAPI(data) {
    return axios.delete(`/post/${data}`)
}

function* removePost(action) {
    console.log(action.data)
    try {
        const result = yield call(removePostAPI, action.data)
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data
        })
        yield put({
            type: REMOVE_POST_TO_ME,
            data: result.data.PostId
        })
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data
        });
    }
}
// 게시글 삭제 끝

// 댓글 저장 시작
function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data
        });
    }
}
// 댓글 저장 끝

// 리트윗
function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet)
}

// 이미지 업로드
function* watchUpLoadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, upLoadImages)
}

// 좋아요
function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost)
}

// 좋아요 삭제
function* watchUnLiketPost() {
    yield takeLatest(UNLIKE_POST_REQUEST, UnLikePost)
}

// 게시글 하나
function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

// 게시글 여러개
function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

//게시글 저장
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

//게시글 삭제
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

//댓글
function* watchCommentPost() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost),
        fork(watchRemovePost),
        fork(watchLoadPosts),
        fork(watchLoadPost),
        fork(watchLikePost),
        fork(watchUnLiketPost),
        fork(watchUpLoadImages),
        fork(watchRetweet),
    ]);
}