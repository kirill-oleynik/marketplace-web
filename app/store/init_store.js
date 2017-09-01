import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import requestMiddleware from './request_middleware';
import reducer from '../reducers';

const serverComposeFactory = () => compose(
  applyMiddleware(thunk, requestMiddleware)
);

const browserComposeFactory = () => {
  if (process.env.NODE_ENV === 'production') {
    return compose(
      applyMiddleware(thunk, requestMiddleware)
    );
  }

  return composeWithDevTools(
    applyMiddleware(thunk, requestMiddleware, logger)
  );
};

const composeFactory = () => (
  typeof window === 'undefined' ? serverComposeFactory() : browserComposeFactory()
);

export default function initStore(initialState = {}, options) {
  if (options.req) {
    Object.assign(initialState, { currentUser: options.req.currentUser });
  }

  return createStore(
    reducer,
    initialState,
    composeFactory()
  );
}
