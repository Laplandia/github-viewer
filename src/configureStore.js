import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [];

try {
  // eslint-disable-next-line no-underscore-dangle
  const reduxDevToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (reduxDevToolExtension) {
    enhancers.push(reduxDevToolExtension());
  }
} catch (e) {
  // do nothing
}

export default function(initialData) {
  const store = createStore(
    rootReducer,
    initialData,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
