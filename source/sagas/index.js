import { watchRequestLogin } from './login.js'
import { all } from 'redux-saga/effects'
export default function* rootSaga() {
	yield all([
		watchRequestLogin()
	])
}
