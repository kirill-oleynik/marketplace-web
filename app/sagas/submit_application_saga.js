import { put, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { submitApplication } from '../services/api';
import { getResponseData, getResponseError } from '../helpers/response_helpers';

import {
  SUCCESS, FAILURE, SUBMIT_APPLICATION, NOTIFICATION_SHOW
} from '../constants';

export function* submitApplicationCandidate(action) {
  const { data } = action.payload;

  try {
    const submitResponse = yield callApi(submitApplication, { data });

    yield put({
      type: SUBMIT_APPLICATION + SUCCESS,
      payload: {
        applicationCandidate: getResponseData(submitResponse)
      }
    });

    yield put({
      type: NOTIFICATION_SHOW,
      payload: {
        event: 'application:submit'
      }
    });
  } catch (exception) {
    yield put({
      type: SUBMIT_APPLICATION + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchSubmitApplication() {
  yield takeEvery(SUBMIT_APPLICATION, submitApplicationCandidate);
}
