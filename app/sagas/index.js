import { all } from 'redux-saga/effects';
import { watchSignUp, watchSignIn, watchSignOut } from './auth_saga';
import { watchFavoritesFetchAll } from './favorites_saga';
import {
  watchProfileCreate, watchProfileUpdate, watchPasswordUpdate
} from './profile_saga';
import {
  watchCategoryExpand, watchCategoriesFetchAll
} from './categories_saga';
import {
  watchFetchSingleApplication,
  watchFetchApplicationGallery,
  watchAddToFavorites,
  watchRemoveFromFavorites,
  watchReviewCreate,
  watchRatingFetch
} from './applications_saga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchProfileCreate(),
    watchProfileUpdate(),
    watchPasswordUpdate(),
    watchCategoryExpand(),
    watchCategoriesFetchAll(),
    watchFetchSingleApplication(),
    watchFetchApplicationGallery(),
    watchAddToFavorites(),
    watchRemoveFromFavorites(),
    watchReviewCreate(),
    watchRatingFetch(),
    watchFavoritesFetchAll()
  ]);
}
