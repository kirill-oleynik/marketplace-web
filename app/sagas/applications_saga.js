import { put, fork, take, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import {
  fetchSingleApplication, fetchApplicationGallery, createFavorites,
  deleteFavorites, fetchRating, createReview
} from '../services/api';

import {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH, APPLICATIONS_FETCH_GALLERY,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES,
  APPLICATIONS_RATING_FETCH, REVIEW_CREATE
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

export function* fetchApplicationRating(action) {
  const { slug } = action.payload.data;

  try {
    const ratingResponse = yield callApi(fetchRating, { slug });

    yield put({
      type: APPLICATIONS_RATING_FETCH + SUCCESS,
      payload: {
        rating: getResponseData(ratingResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: APPLICATIONS_RATING_FETCH + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* createApplicationReview(action) {
  const { data } = action.payload;

  yield put({ type: REVIEW_CREATE + REQUEST });

  try {
    const reviewResponse = yield callApi(createReview, { data });

    yield put({
      type: REVIEW_CREATE + SUCCESS,
      payload: {
        review: getResponseData(reviewResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: REVIEW_CREATE + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* createReviewFetchRating(action) {
  yield fork(createApplicationReview, action);
  yield take(REVIEW_CREATE + SUCCESS);
  yield fork(fetchApplicationRating, action);
}

export function* watchReviewCreate() {
  yield takeEvery(REVIEW_CREATE, createReviewFetchRating);
}

export function* watchRatingFetch() {
  yield takeEvery(APPLICATIONS_RATING_FETCH, fetchApplicationRating);
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
