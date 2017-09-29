import { put, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { fetchSearchResults } from '../services/api';
import { REQUEST, SUCCESS, FAILURE, SEARCH_FETCH } from '../constants';

export function* search(action) {
  const { query } = action.payload;

  yield put({ type: SEARCH_FETCH + REQUEST });

  try {
    const searchResponse = yield callApi(fetchSearchResults, { query });

    yield put({
      type: SEARCH_FETCH + SUCCESS,
      payload: {
        data: getResponseData(searchResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: SEARCH_FETCH + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH_FETCH, search);
}
