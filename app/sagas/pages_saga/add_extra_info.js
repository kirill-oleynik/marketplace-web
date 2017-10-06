import redirect from 'next-redirect';
import { call, select } from 'redux-saga/effects';

import { home, signIn } from '../../routes';
import { getCurrentUser } from '../../selectors/current_user_selectors';

export default function* loadAddExtraInfoPage(context) {
  const state = yield select();
  const currentUser = getCurrentUser(state);

  if (!currentUser.id) {
    yield call(redirect, context, signIn);
  }

  if (currentUser.phone || currentUser.jobTitle || currentUser.organization) {
    yield call(redirect, context, home);
  }
}
