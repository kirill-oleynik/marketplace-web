import { all } from 'redux-saga/effects';
import { watchSignUp, watchSignIn } from './auth_saga';
import {
  watchProfileCreate, watchProfileUpdate, watchPasswordUpdate
} from './profile_saga';
import {
  watchCategoryExpand, watchCategoriesFetchAll
} from './categories_saga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchProfileCreate(),
    watchProfileUpdate(),
    watchPasswordUpdate(),
    watchCategoryExpand(),
    watchCategoriesFetchAll()
  ]);
}