import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const serverComposeFactory = () => compose(
  applyMiddleware(sagaMiddleware)
);

const browserComposeFactory = () => {
  if (process.env.NODE_ENV === 'production') {
    return compose(
      applyMiddleware(sagaMiddleware)
    );
  }

  return composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
  );
};

const composeFactory = () => (
  typeof window === 'undefined' ? serverComposeFactory() : browserComposeFactory()
);

export default function initStore(initialState = {}, { req }) {
  if (req) {
    Object.assign(initialState, {
      cookie: req.headers.cookie,
      currentUser: req.currentUser
    });
  } else {
    Object.assign(initialState, {
      cookie: ''
    });
  }

  const store = createStore(reducer, initialState, composeFactory());

  store.sagaTask = sagaMiddleware.run(saga);

  return store;
}
