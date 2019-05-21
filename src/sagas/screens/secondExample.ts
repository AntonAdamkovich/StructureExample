import { all, takeEvery, put, take } from 'redux-saga/effects';

import {
  ActionTypes as UserActionTypes,
  ActionCreators as UserActionCreators,
} from '../../domains/user';

import { ActionTypes as secondExampleActionTypes } from '../../actionTypes/screens/secondExample';

import { openModal } from '../../actionCreators/modals';
import { ActionTypes as ModalActionTypes } from '../../actionTypes/modals';

import { navigateToFirstExample } from '../../actionCreators/routing';

function* logOutWorker() {
  // open modal with question 'do you really like to log out?'
  yield put(openModal());
  const modalResultAction = yield take([
    ModalActionTypes.LOG_OUT_SUCCESS,
    ModalActionTypes.LOG_OUT_FAILURE,
  ]);
  //handle modalResultAction here
  // ...

  yield put(UserActionCreators.logOut());
  const userResultAction = yield take([
    UserActionTypes.LOG_OUT_SUCCESS,
    UserActionTypes.LOG_OUT_FAILURE,
  ]);
  //handle userResultAction here
  // ...

  // open modal with text 'everything is great'
  yield put(openModal());
  //go to login
  yield put(navigateToFirstExample());
}

function* logOutWatcher() {
  yield takeEvery(secondExampleActionTypes.LOG_OUT_REQUEST, logOutWorker)
}

export default function* () {
  yield all([
    logOutWatcher()
  ])
}
