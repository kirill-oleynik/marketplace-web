import { put, takeEvery } from 'redux-saga/effects';

import { callApi } from '../effects';
import { fetchSingleCategory, fetchAllCategories } from '../services/api';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import {
  REQUEST, SUCCESS, FAILURE,
  CATEGORIES_FETCH_ALL, CATEGORIES_FETCH, CATEGORIES_EXPAND
} from '../constants';

export function* fetchCategory({ payload }) {
  const { id } = payload;

  yield put({ type: CATEGORIES_FETCH + REQUEST });

  try {
    const categoryResponse = yield callApi(fetchSingleCategory, { id });

    yield put({
      type: CATEGORIES_FETCH + SUCCESS,
      payload: {
        category: getResponseData(categoryResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: CATEGORIES_FETCH + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* fetchCategories() {
  yield put({ type: CATEGORIES_FETCH_ALL + REQUEST });

  try {
    const categoriesResponse = yield callApi(fetchAllCategories);

    yield put({
      type: CATEGORIES_FETCH_ALL + SUCCESS,
      payload: {
        categories: getResponseData(categoriesResponse)
      }
    });
  } catch (exception) {
    yield put({
      type: CATEGORIES_FETCH_ALL + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchCategoryExpand() {
  yield takeEvery(CATEGORIES_EXPAND, fetchCategory);
}

export function* watchCategoriesFetchAll() {
  yield takeEvery(CATEGORIES_FETCH_ALL, fetchCategories);
}
