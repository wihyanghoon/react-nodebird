import { delay, all, fork, takeLatest, put, throttle, call } from "redux-saga/effects";
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE
} from '../reducers/post'

import { ADD_POST_TO_ME, REMOVE_POST_TO_ME } from "../reducers/user";
import axios  from "axios";
import shortId from 'shortid';

function addPostAPI(data) {
    return axios.post('/post', { content: data });
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
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

function removePostAPI(data) {
    return axios.post('/api/addPost', { content: data })
}

function* removePost(action) {
    try {
        // const result = yield call(addPostAPI, action.data)
        yield delay(1000)
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        })
        yield put({
            type: REMOVE_POST_TO_ME,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data
        });
    }
}

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
            data: err.response.data
        });
    }
}

function loadPostsAPI(data) {
    return axios.get('/posts', data);
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchCommentPost() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost),
        fork(watchRemovePost),
        fork(watchLoadPosts),
    ]);
}