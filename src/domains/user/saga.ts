import { all, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from './actionTypes';

function* fetchUserDataWorker() {
  yield Promise.resolve();
}

function* fetchUserDataWatcher() {
  yield takeEvery(ActionTypes.FETCH_USER_DATA, fetchUserDataWorker);
}

export default function* userSaga() {
  yield all([
    fetchUserDataWatcher()
  ]);
}
