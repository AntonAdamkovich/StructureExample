import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { AsyncStorage } from 'react-native';
import filter from 'redux-localstorage-filter';

// middlewares
import persistState, { mergePersistedState } from 'redux-localstorage';
import asyncStorageAdapter from 'redux-localstorage/lib/adapters/AsyncStorage';

import rootSaga from '../sagas';
import rootReducer from '../reducers';
import { routing } from '../selectors/routing';

const reducer = compose(
  mergePersistedState(),
)(rootReducer);

const storage = compose(
  filter(['user.accessToken'])
)(asyncStorageAdapter(AsyncStorage));

const enhancers = [
  persistState(storage, 'storage'),
];
const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = createReactNavigationReduxMiddleware(routing);
const middlewares = [
  sagaMiddleware,
  routingMiddleware,
];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
