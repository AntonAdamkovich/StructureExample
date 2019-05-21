import { all, select, put } from 'redux-saga/effects';

import { Selectors } from '../domains/user';
import { navigateToFirstExample, navigateToSecondExample } from '../actionCreators/routing';

function* initialize() {
  // all preloading logic here
  const token = yield select(Selectors.accessToken);

  if (token != null) {
    yield put(navigateToFirstExample());
  } else {
    yield put(navigateToSecondExample());
  }
}

export default function* () {
  yield all([
    initialize()
  ]);
}
