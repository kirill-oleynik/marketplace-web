import { put, call, takeEvery } from 'redux-saga/effects';

import loadHomePage from './home';
import loadSignInPage from './sign_in';
import loadSignUpPage from './sign_up';
import loadFavoritesPage from './favorites';
import loadApplicationsPage from './applications';
import loadAddExtraInfoPage from './add_extra_info';
import loadResetPasswordConfirmPage from './reset_password_confirm';

import { PAGE_LOAD } from '../../constants';
import { loadStart, loadFinish } from '../../actions/page_actions';

const pages = {
  home: loadHomePage,
  sign_in: loadSignInPage,
  sign_up: loadSignUpPage,
  favorites: loadFavoritesPage,
  applications: loadApplicationsPage,
  add_extra_info: loadAddExtraInfoPage,
  reset_password_confirm: loadResetPasswordConfirmPage
};

export function* loadPage({ payload }) {
  const { name, context } = payload;
  const handler = pages[name] || (() => {});

  yield put(
    loadStart(name)
  );

  yield call(handler, context);

  yield put(
    loadFinish(name)
  );
}

export default function* watchPageLoad() {
  yield takeEvery(PAGE_LOAD, loadPage);
}
