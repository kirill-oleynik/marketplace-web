import Router from 'next/router';
import { put, fork, call, take, takeLatest } from 'redux-saga/effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { createUser, createSession, fetchCurrentUser } from '../services/api';
import { home, addExtraInfo } from '../routes';
import {
  REQUEST, SUCCESS, FAILURE, AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_FETCH_USER
} from '../constants';

export function* signUp(userData) {
  yield put({ type: AUTH_SIGN_UP + REQUEST });

  try {
    const userResponse = yield call(createUser, userData);

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

export function* signIn(sessionData) {
  yield put({ type: AUTH_SIGN_IN + REQUEST });

  try {
    const sessionResponse = yield call(createSession, sessionData);

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

export function* fetchUser() {
  yield put({ type: AUTH_FETCH_USER + REQUEST });

  try {
    const userResponse = yield call(fetchCurrentUser);

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
