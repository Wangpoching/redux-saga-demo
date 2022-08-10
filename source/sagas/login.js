import {
	takeEvery,
    call,
    put,
    take,
    fork,
    cancel
} from 'redux-saga/effects'

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGIN_CANCEL
} from '../actions/login.js'

import {
    loginAPI
} from '../API'

export function* watchRequestLogin() {
	yield takeEvery(LOGIN_REQUEST, loginFlow)
}

export function* authorize({username, password}) {
	// to be done
	try {
		const response = yield call(loginAPI, {
			username,
			password
		})
		yield put({
			type: LOGIN_SUCCESS,
			response
		})
	} catch (error) {
		yield put({
			type: LOGIN_ERROR,
			error
		})
	}
}

export function* loginFlow(action) {
	const task = yield fork(authorize,
		{username: action.username, password: action.password})
	yield take(LOGIN_CANCEL)
	yield cancel(task)
}