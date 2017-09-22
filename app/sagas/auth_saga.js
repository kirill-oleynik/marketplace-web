import Router from 'next/router';
import { put, call, fork, take, takeLatest } from 'redux-saga/effects';

import { callApi } from '../effects';
import { home, addExtraInfo } from '../routes';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import {
  createUser, createSession, destroySession, fetchCurrentUser
} from '../services/api';

import {
  REQUEST, SUCCESS, FAILURE, AUTH_SIGN_UP,
  AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_FETCH_USER
} from '../constants';

export function* signUp(data) {
  yield put({ type: AUTH_SIGN_UP + REQUEST });

  try {
    const userResponse = yield callApi(createUser, { data });

    yield put({
      type: AUTH_SIGN_UP + SUCCESS,
      payload: {
        user: getResponseData(userResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: AUTH_SIGN_UP + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* signIn(data) {
  yield put({ type: AUTH_SIGN_IN + REQUEST });

  try {
    const sessionResponse = yield callApi(createSession, { data });

    yield put({
      type: AUTH_SIGN_IN + SUCCESS,
      payload: {
        session: getResponseData(sessionResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: AUTH_SIGN_IN + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* signOut() {
  yield put({ type: AUTH_SIGN_OUT + REQUEST });

  try {
    yield callApi(destroySession);

    yield put({
      type: AUTH_SIGN_OUT + SUCCESS
    });

    yield call([Router, 'push'], home);
  } catch (exception) {
    yield put({
      type: AUTH_SIGN_OUT + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* fetchUser() {
  yield put({ type: AUTH_FETCH_USER + REQUEST });

  try {
    const userResponse = yield callApi(fetchCurrentUser);

    yield put({
      type: AUTH_FETCH_USER + SUCCESS,
      payload: {
        user: getResponseData(userResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: AUTH_FETCH_USER + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* signInRedirect(action) {
  const { data } = action.payload;

  yield fork(signIn, data);
  yield take(AUTH_SIGN_IN + SUCCESS);
  yield fork(fetchUser);
  yield take(AUTH_FETCH_USER + SUCCESS);
  yield call([Router, 'replace'], home);
}

export function* signUpSignInRedirect(action) {
  const { data } = action.payload;

  yield fork(signUp, data);
  yield take(AUTH_SIGN_UP + SUCCESS);
  yield fork(signIn, { email: data.email, password: data.password });
  yield take(AUTH_SIGN_IN + SUCCESS);
  yield fork(fetchUser);
  yield take(AUTH_FETCH_USER + SUCCESS);
  yield call([Router, 'replace'], addExtraInfo);
}

export function* watchSignIn() {
  yield takeLatest(AUTH_SIGN_IN, signInRedirect);
}

export function* watchSignUp() {
  yield takeLatest(AUTH_SIGN_UP, signUpSignInRedirect);
}

export function* watchSignOut() {
  yield takeLatest(AUTH_SIGN_OUT, signOut);
}
