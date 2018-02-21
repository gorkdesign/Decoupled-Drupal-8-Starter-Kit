import { all } from 'redux-saga/effects';
import { watchCsrfToken } from 'redux/auth/csrf/sagas';
import { watchOAuth } from 'redux/auth/oauth/sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchCsrfToken(),
    watchOAuth(),
  ]);
}
