import Router from 'next/router';
import { put, call, takeEvery } from 'redux-saga/effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { home } from '../routes';
import { createProfile, updateUser } from '../services/api';
import {
  REQUEST, SUCCESS, FAILURE,
  PROFILE_CREATE, PROFILE_UPDATE
} from '../constants';

export function* createUserProfile(action) {
  const { data } = action.payload;

  yield put({ type: PROFILE_CREATE + REQUEST });

  try {
    const profileResponse = yield call(createProfile, data);

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
  const { id, data } = action.payload;

  try {
    const profileResponse = yield call(updateUser, id, data);

    yield put({
      type: PROFILE_UPDATE + SUCCESS,
      payload: {
        profile: getResponseData(profileResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: PROFILE_UPDATE + FAILURE,
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
