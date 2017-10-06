import { put, take } from 'redux-saga/effects';

import { fetchAll } from '../../actions/categories_actions';
import { SUCCESS, FAILURE, CATEGORIES_FETCH_ALL } from '../../constants';

export default function* loadSignInPage() {
  yield put(
    fetchAll()
  );

  yield take([
    CATEGORIES_FETCH_ALL + SUCCESS,
    CATEGORIES_FETCH_ALL + FAILURE
  ]);
}
