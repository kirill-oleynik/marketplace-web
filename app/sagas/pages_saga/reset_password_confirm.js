import redirect from 'next-redirect';
import { call, select } from 'redux-saga/effects';

import { home } from '../../routes';
import { getCurrentUser } from '../../selectors/current_user_selectors';

export default function* loadResetPasswordConfirmPage(context) {
  const state = yield select();
  const currentUser = getCurrentUser(state);

  if (currentUser.id) {
    yield call(redirect, context, home);
  }
}
