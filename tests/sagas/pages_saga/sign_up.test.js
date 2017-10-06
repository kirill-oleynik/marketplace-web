import redirect from 'next-redirect';
import { call, select } from 'redux-saga/effects';

import { home } from 'app/routes';

import loadSignUpPage from 'app/sagas/pages_saga/sign_up';

describe('#loadSignUpPage', () => {
  describe('when session exists', () => {
    it('redirects to home page', () => {
      const context = Symbol('context');
      const generator = loadSignUpPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({ currentUser: { id: 1 } }).value).toEqual(
        call(redirect, context, home)
      );
    });
  });
});
