import { call, select } from 'redux-saga/effects';
import { getCookie } from './selectors/cookie_selectors';

export function* callApi(requestFn, options = {}) {
  const state = yield select();

  return yield call(requestFn, {
    ...options,
    cookie: getCookie(state)
  });
}
