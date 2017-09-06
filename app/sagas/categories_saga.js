import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchAllCategories } from '../services/api';
import { REQUEST, SUCCESS, FAILURE, CATEGORIES_FETCH } from '../constants';
import { getResponseData, getResponseError } from '../helpers/response_helpers';

export function* fetchCategories() {
  yield put({ type: CATEGORIES_FETCH + REQUEST });

  try {
    const profileResponse = yield call(fetchAllCategories);

    yield put({
      type: CATEGORIES_FETCH + SUCCESS,
      payload: {
        categories: getResponseData(profileResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: CATEGORIES_FETCH + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchCategoriesFetch() {
  yield takeEvery(CATEGORIES_FETCH, fetchCategories);
}
