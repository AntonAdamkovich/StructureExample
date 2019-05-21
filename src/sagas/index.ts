import { all } from 'redux-saga/effects';

// generic
import initializeSaga from './initialize';

// domains
import { saga as userSaga } from '../domains/user';

export default function* rootSaga() {
  yield all([
    // generic
    initializeSaga(),

    // domains
    userSaga(),
  ]);
}
