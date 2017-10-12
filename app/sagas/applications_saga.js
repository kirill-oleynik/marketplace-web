import { put, call, takeEvery } from 'redux-saga/effects';

import { callApi, isUserSignedIn, saveUnfinishedAndRedirect } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';

import {
  fetchSingleApplication, fetchApplicationGallery, createFavorites, deleteFavorites
} from '../services/api';

import {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH, APPLICATIONS_FETCH_GALLERY,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES,
  NOTIFICATION_SHOW
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

export function* fetchGallery({ payload }) {
  const { slug } = payload;

  yield put({ type: APPLICATIONS_FETCH_GALLERY + REQUEST });

  try {
    const applicationResponse = yield callApi(fetchApplicationGallery, { slug });

    yield put({
      type: APPLICATIONS_FETCH_GALLERY + SUCCESS,
      payload: {
        gallery: getResponseData(applicationResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: APPLICATIONS_FETCH_GALLERY + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* addToFavorites(action) {
  const { id } = action.payload;
  const userSignedIn = yield call(isUserSignedIn);

  if (!userSignedIn) {
    yield call(saveUnfinishedAndRedirect, action);
    return;
  }

  yield put({ type: APPLICATIONS_ADD_TO_FAVORITES + REQUEST });

  try {
    const favoriteResponse = yield callApi(createFavorites, { id });

    yield put({
      type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
      payload: {
        favorite: getResponseData(favoriteResponse)
      }
    });

    yield put({
      type: NOTIFICATION_SHOW,
      payload: {
        event: 'favorites:add'
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

    yield put({
      type: NOTIFICATION_SHOW,
      payload: {
        event: 'favorites:remove'
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

export function* watchFetchApplicationGallery() {
  yield takeEvery(APPLICATIONS_FETCH_GALLERY, fetchGallery);
}

export function* watchAddToFavorites() {
  yield takeEvery(APPLICATIONS_ADD_TO_FAVORITES, addToFavorites);
}

export function* watchRemoveFromFavorites() {
  yield takeEvery(APPLICATIONS_REMOVE_FROM_FAVORITES, removeFromFavorites);
}
