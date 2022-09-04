import { all, fork, put, delay, takeLatest } from "redux-saga/effects";


function logInAPI() {
    return axios.post('/api/login')
}

function* logIn(action) {
    console.log('saga start')
    try {
        // const result = yield call(logInAPI, action.data)
        delay(1000)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logaout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI)
        delay(1000)
        yield put({
            type: 'LOG_OUT_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn)
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut)
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut)
    ])
}