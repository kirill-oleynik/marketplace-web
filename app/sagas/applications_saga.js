import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchSingleApplication } from '../services/api';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH } from '../constants';

export function* fetchApplication({ payload }) {
  const { id } = payload;

  yield put({ type: APPLICATION_FETCH + REQUEST });

  try {
    const applicationResponse = yield call(fetchSingleApplication, id);

    yield put({
      type: APPLICATION_FETCH + SUCCESS,
      payload: {
        application: getResponseData(applicationResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: APPLICATION_FETCH + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchFetchSingleApplication() {
  yield takeEvery(APPLICATION_FETCH, fetchApplication);
}
