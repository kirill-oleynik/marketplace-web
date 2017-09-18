import { put, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { fetchSingleApplication, createFavorites, deleteFavorites } from '../services/api';

import {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES
} from '../constants';

export function* fetchApplication({ payload }) {
  const { id } = payload;

  yield put({ type: APPLICATION_FETCH + REQUEST });

  try {
    const applicationResponse = yield callApi(fetchSingleApplication, { id });

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

export function* addToFavorites({ payload }) {
  const { id } = payload;

  yield put({ type: APPLICATIONS_ADD_TO_FAVORITES + REQUEST });

  try {
    const favoriteResponse = yield callApi(createFavorites, { id });

    yield put({
      type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
      payload: {
        favorite: getResponseData(favoriteResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: APPLICATIONS_ADD_TO_FAVORITES + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* removeFromFavorites({ payload }) {
  const { id } = payload;

  yield put({ type: APPLICATIONS_REMOVE_FROM_FAVORITES + REQUEST });

  try {
    const favoriteResponse = yield callApi(deleteFavorites, { id });

    yield put({
      type: APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS,
      payload: {
        favorite: getResponseData(favoriteResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: APPLICATIONS_REMOVE_FROM_FAVORITES + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchFetchSingleApplication() {
  yield takeEvery(APPLICATION_FETCH, fetchApplication);
}

export function* watchAddToFavorites() {
  yield takeEvery(APPLICATIONS_ADD_TO_FAVORITES, addToFavorites);
}

export function* watchRemoveFromFavorites() {
  yield takeEvery(APPLICATIONS_REMOVE_FROM_FAVORITES, removeFromFavorites);
}
