import redirect from 'next-redirect';
import { all, put, take, call, select } from 'redux-saga/effects';

import { signIn } from '../../routes';
import { getCurrentUser } from '../../selectors/current_user_selectors';
import { fetchAll as fetchAllFavorites } from '../../actions/favorites_actions';
import { fetchAll as fetchAllCategories } from '../../actions/categories_actions';
import { SUCCESS, FAILURE, CATEGORIES_FETCH_ALL, FAVORITES_FETCH_ALL } from '../../constants';

export default function* loadFavoritesPage(context) {
  const state = yield select();
  const currentUser = getCurrentUser(state);

  if (currentUser.id) {
    yield put(
      fetchAllFavorites()
    );

    yield put(
      fetchAllCategories()
    );

    yield all([
      take([FAVORITES_FETCH_ALL + SUCCESS, FAVORITES_FETCH_ALL + FAILURE]),
      take([CATEGORIES_FETCH_ALL + SUCCESS, CATEGORIES_FETCH_ALL + FAILURE])
    ]);
  } else {
    yield call(redirect, context, signIn);
  }
}
