import { put, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { createReview } from '../services/api';
import { REQUEST, SUCCESS, FAILURE, REVIEW_CREATE } from '../constants';

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

export function* watchReviewCreate() {
  yield takeEvery(REVIEW_CREATE, createApplicationReview);
}
