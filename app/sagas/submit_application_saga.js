import { put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { submitApplication } from '../services/api';
import { SUCCESS, FAILURE, SUBMIT_APPLICATION } from '../constants';

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
