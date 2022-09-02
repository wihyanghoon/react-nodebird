import { all, call, fork, put, takeLatest, delay } from 'redux-saga/effects'

import postSaga from './post'
import userSaga from './user'

export default function* rootSaga() {
    yield all([
        fork(userSaga), // call
        fork(postSaga),
    ])
}