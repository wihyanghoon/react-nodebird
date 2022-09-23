import { delay, all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESSS,
    LOAD_USER_FAILURE,
    CHANGE_NICK_REQUEST,
    CHANGE_NICK_SUCCESS,
    CHANGE_NICK_FAILURE,
    LOAD_FOLLOWER_REQUEST,
    LOAD_FOLLOWER_SUCCESS,
    LOAD_FOLLOWER_FAILURE,
    LOAD_FOLLWING_REQUEST,
    LOAD_FOLLWING_SUCESSS,
    LOAD_FOLLWING_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    LOAD_MYINFO_REQUEST,
    LOAD_MYINFO_SUCCESSS,
    LOAD_MYINFO_FAILURE
} from '../reducers/user'

function loadMyInfoAPI() {
    return axios.get('/user')
}

function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI)
        yield put({
            type: LOAD_MYINFO_SUCCESSS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_MYINFO_FAILURE,
            error: err.response.data,
        });
    }
}


function getUserAPI(data) {
    return axios.get(`/user/${data}`)
}

function* getUser(action) {
    try {
        const result = yield call(getUserAPI, action.data)
        yield put({
            type: LOAD_USER_SUCCESSS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data
        });
    }
}

function getFollwerAPI(data) {
    return axios.get('/user/follower', data)
}

function* getFollwer(action) {
    try {
        const result = yield call(getFollwerAPI, action.data)
        yield put({
            type: LOAD_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_FOLLOWER_FAILURE,
            error: err.response.data
        });
    }
}

function getFollowingAPI(data) {
    return axios.get('/user/following', data)
}

function* getFollowing(action) {
    try {
        const result = yield call(getFollowingAPI, action.data)
        yield put({
            type: LOAD_FOLLWING_SUCESSS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_FOLLWING_FAILURE,
            error: err.response.data
        });
    }
}


function logInAPI(data) {
    return axios.post('/user/login', data)
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data)
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('/user/logout');
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}



function signUpAPI(data) {
    return axios.post('/user', data)
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}
function followAPI(data) {
    return axios.patch(`/user/${data}/follow`)
}

function* follow(action) {
    try {
        const result = yield call(followAPI , action.data)
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data
        });
    }
}

function unFollowAPI(data) {
    return axios.delete(`/user/${data}/follow`)
}

function* unFollow(action) {
    try {
        const result = yield call(unFollowAPI, action.data)
        yield console.log(result)
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data
        });
    }
}

function chanegeNickAPI(data) {
    return axios.patch('/user/nickname', { nickname : data })
}

function* chanegeNick(action) {
    try {
        const result = yield call(chanegeNickAPI, action.data)
        yield console.log(result)
        yield put({
            type: CHANGE_NICK_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: CHANGE_NICK_FAILURE,
            error: err.response.data
        });
    }
}

function removeFollowerAPI(data) {
    return axios.delete(`/user/${data}/following`)
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data)
        console.log(result)
        yield console.log(result)
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnFollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unFollow)
}

function* watchGetUser() {
    yield takeLatest(LOAD_USER_REQUEST, getUser)
}

function* watchGetFollow() {
    yield takeLatest(LOAD_FOLLOWER_REQUEST, getFollwer)
}

function* watchGetFollowing() {
    yield takeLatest(LOAD_FOLLWING_REQUEST, getFollowing)
}

function* watchChanegeNick() {
    yield takeLatest(CHANGE_NICK_REQUEST, chanegeNick)
}

function* watchRemoveFollower(){
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower)
}

function* watchLoadMyInfo(){
    yield takeLatest(LOAD_MYINFO_REQUEST, loadMyInfo)
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLoadMyInfo),
        fork(watchLogOut),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchRemoveFollower),
        fork(watchGetUser),
        fork(watchChanegeNick),
        fork(watchGetFollow),
        fork(watchGetFollowing),
    ])
}