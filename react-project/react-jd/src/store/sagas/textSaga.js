// 处理异步action
// request => success
// watcher监听者 worker 工作者
// put 相当于 dispatch

import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import axios from 'axios'

function* worker() {
    const sagaData = yield call(axios.get, '/api/saga')

    yield put({
        type: 'GET_USER_SUCCESS',
        sagaMsg: sagaData.data.message
    })
}

export default function* watcher() {
    yield takeEvery('GET_USER_REQUEST', worker) // 两个参数 要坚挺的 actin 2. worker
}