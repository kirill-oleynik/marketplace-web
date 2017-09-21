import { put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../effects';

import { fetchAllFavorites } from '../services/api';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { REQUEST, SUCCESS, FAILURE, FAVORITES_FETCH_ALL } from '../constants';

export function* fetchFavorites() {
  yield put({ type: FAVORITES_FETCH_ALL + REQUEST });

  try {
    const favoritesResponse = yield callApi(fetchAllFavorites);

    yield put({
      type: FAVORITES_FETCH_ALL + SUCCESS,
      payload: {
        favorites: getResponseData(favoritesResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: FAVORITES_FETCH_ALL + FAILURE,
      payload: getResponseError(exception)
    });
  }
}
export function* watchFavoritesFetchAll() {
  yield takeEvery(FAVORITES_FETCH_ALL, fetchFavorites);
}
