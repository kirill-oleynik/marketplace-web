import { all } from 'redux-saga/effects';

import pagesRootSaga from './pages_saga';
import { watchSearch } from './search_saga';
import { watchFavoritesFetchAll } from './favorites_saga';
import { watchSubmitApplication } from './submit_application_saga';
import { watchSignUp, watchSignIn, watchSignOut } from './auth_saga';
import { watchCategoryExpand, watchCategoriesFetchAll } from './categories_saga';
import { watchRatingFetch, watchReviewCreate, watchReviewDelete } from './rating_saga';
import { watchResetPasswordRequest, watchResetPasswordConfirm } from './reset_password_saga';
import { watchProfileCreate, watchProfileUpdate, watchPasswordUpdate } from './profile_saga';

import {
  watchAddToFavorites, watchRemoveFromFavorites,
  watchFetchSingleApplication, watchFetchApplicationGallery
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
    watchReviewDelete(),
    watchRatingFetch(),
    watchSubmitApplication(),
    watchResetPasswordRequest(),
    watchResetPasswordConfirm(),
    watchFavoritesFetchAll(),
    watchSearch(),
    pagesRootSaga()
  ]);
}
