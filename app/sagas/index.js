import { all } from 'redux-saga/effects';
import { watchSignUp, watchSignIn } from './auth_saga';
import { watchProfileCreate } from './profile_saga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchProfileCreate()
  ]);
}
