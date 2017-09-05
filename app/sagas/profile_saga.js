import Router from 'next/router';
import { put, call, takeEvery } from 'redux-saga/effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { home } from '../routes';
import { createProfile } from '../services/api';
import { REQUEST, SUCCESS, FAILURE, PROFILE_CREATE } from '../constants';

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

export function* watchProfileCreate() {
  yield takeEvery(PROFILE_CREATE, createUserProfile);
}
