import { all } from 'redux-saga/effects';
import { watchSignUp, watchSignIn } from './auth_saga';
import { watchCategoriesFetch } from './categories_saga';
import {
  watchProfileCreate, watchProfileUpdate, watchPasswordUpdate
} from './profile_saga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchProfileCreate(),
    watchProfileUpdate(),
    watchCategoriesFetch(),
    watchPasswordUpdate()
  ]);
}
