import redirect from 'next-redirect';
import { call, select } from 'redux-saga/effects';

import { home } from 'app/routes';

import loadResetPasswordConfirmPage from 'app/sagas/pages_saga/reset_password_confirm';

describe('#loadResetPasswordConfirmPage', () => {
  describe('when session exists', () => {
    it('redirects to home page', () => {
      const context = Symbol('context');
      const generator = loadResetPasswordConfirmPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({ currentUser: { id: 1 } }).value).toEqual(
        call(redirect, context, home)
      );
    });
  });
});
