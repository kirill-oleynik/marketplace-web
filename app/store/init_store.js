import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './../reducers';

const serverComposeFactory = () => compose(
  applyMiddleware(thunk)
);

const browserComposeFactory = () => {
  if (process.NODE_ENV === 'production') {
    return compose(
      applyMiddleware(thunk)
    );
  }

  return composeWithDevTools(
    applyMiddleware(logger, thunk)
  );
};

const composeFactory = () => (
  typeof window === 'undefined' ? serverComposeFactory() : browserComposeFactory()
);

export default function initStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeFactory()
  );
}
