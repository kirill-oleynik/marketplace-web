import Router from 'next/router';
import { put, call, select } from 'redux-saga/effects';

import { signIn } from './routes';
import { getCookie } from './selectors/cookie_selectors';
import { getCurrentUser } from './selectors/current_user_selectors';
import { getRoute, getAction } from './selectors/unfinished_selectors';

import { UNFINISHED_SET } from './constants';

export function* callApi(requestFn, options = {}) {
  const state = yield select();

  return yield call(requestFn, {
    ...options,
    cookie: getCookie(state)
  });
}

export function* isUserSignedIn() {
  const state = yield select();
  const currentUser = getCurrentUser(state);

  return !!currentUser.id;
}

export function* saveUnfinishedAndRedirect(action = {}, route = null) {
  yield put({
    type: UNFINISHED_SET,
    payload: {
      action,
      route: route || {
        path: Router.route,
        query: Router.query,
        asPath: Router.asPath
      }
    }
  });

  yield call([Router, 'push'], signIn);
}

export function* replyUnfinishedRoute() {
  const state = yield select();
  const { path, query, asPath } = getRoute(state);

  if (!path) {
    return false;
  }

  yield call([Router, 'replace'], {
    pathname: path,
    query: query || {}
  }, asPath || path);

  return true;
}

export function* replyUnfinishedAction() {
  const state = yield select();
  const action = getAction(state);

  if (action.type) {
    yield put(action);
  }
}
