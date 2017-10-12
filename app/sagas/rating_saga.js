import { put, call, fork, take, takeEvery } from 'redux-saga/effects';

import { callApi, isUserSignedIn, saveUnfinishedAndRedirect } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';

import { fetchRating, createReview, deleteReview } from '../services/api';

import {
  REQUEST, SUCCESS, FAILURE, REVIEW_CREATE,
  APPLICATIONS_RATING_FETCH, REVIEW_DELETE
} from '../constants';

export function* fetchApplicationRating(slug) {
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

export function* deleteApplicationReview(id) {
  yield put({ type: REVIEW_DELETE + REQUEST });

  try {
    const reviewResponse = yield callApi(deleteReview, { id });

    yield put({
      type: REVIEW_DELETE + SUCCESS,
      payload: {
        review: getResponseData(reviewResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: REVIEW_DELETE + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* createApplicationReview(action) {
  const { data } = action.payload;
  const userSignedIn = yield call(isUserSignedIn);

  if (!userSignedIn) {
    yield call(saveUnfinishedAndRedirect, action);
    return;
  }

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
  const { data } = action.payload;

  yield fork(createApplicationReview, action);
  yield take(REVIEW_CREATE + SUCCESS);
  yield fork(fetchApplicationRating, data.slug);
}

export function* deleteReviewFetchRating(action) {
  const { reviewId, applicationSlug } = action.payload;

  yield fork(deleteApplicationReview, reviewId);
  yield take(REVIEW_DELETE + SUCCESS);
  yield fork(fetchApplicationRating, applicationSlug);
}

export function* watchRatingFetch() {
  yield takeEvery(APPLICATIONS_RATING_FETCH, function* processAction(action) {
    yield fork(fetchApplicationRating, action.payload.data.slug);
  });
}

export function* watchReviewCreate() {
  yield takeEvery(REVIEW_CREATE, createReviewFetchRating);
}

export function* watchReviewDelete() {
  yield takeEvery(REVIEW_DELETE, deleteReviewFetchRating);
}
