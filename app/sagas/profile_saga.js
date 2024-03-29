import Router from 'next/router';
import { put, call, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { home } from '../routes';
import { createProfile, updateUser, updatePassword } from '../services/api';
import {
  REQUEST, SUCCESS, FAILURE,
  PROFILE_CREATE, PROFILE_UPDATE, PASSWORD_UPDATE, PROFILE_MODAL_TOGGLE
} from '../constants';

export function* createUserProfile(action) {
  const { data } = action.payload;

  yield put({ type: PROFILE_CREATE + REQUEST });

  try {
    const profileResponse = yield callApi(createProfile, { data });

    yield put({
      type: PROFILE_CREATE + SUCCESS,
      payload: {
        profile: getResponseData(profileResponse)
      }
    });

    yield call([Router, 'push'], home);
  } catch (exception) {
    yield put({
      type: PROFILE_CREATE + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* updateUserProfile(action) {
  const { data } = action.payload;

  try {
    const profileResponse = yield callApi(updateUser, { data });

    yield put({
      type: PROFILE_UPDATE + SUCCESS,
      payload: {
        profile: getResponseData(profileResponse)
      }
    });

    yield put({
      type: PROFILE_MODAL_TOGGLE,
      payload: {
        modalState: false
      }
    });
  } catch (exception) {
    yield put({
      type: PROFILE_UPDATE + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* updateUserPassword(action) {
  const { data } = action.payload;

  try {
    const passwordResponse = yield callApi(updatePassword, { data });

    yield put({
      type: PASSWORD_UPDATE + SUCCESS,
      payload: {
        profile: getResponseData(passwordResponse)
      }
    });

    yield put({
      type: PROFILE_MODAL_TOGGLE,
      payload: {
        modalState: false
      }
    });
  } catch (exception) {
    yield put({
      type: PASSWORD_UPDATE + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchProfileUpdate() {
  yield takeEvery(PROFILE_UPDATE, updateUserProfile);
}

export function* watchProfileCreate() {
  yield takeEvery(PROFILE_CREATE, createUserProfile);
}

export function* watchPasswordUpdate() {
  yield takeEvery(PASSWORD_UPDATE, updateUserPassword);
}
