import redirect from 'next-redirect';
import { call, select } from 'redux-saga/effects';

import { home, signIn } from 'app/routes';

import loadAddExtraInfoPage from 'app/sagas/pages_saga/add_extra_info';

describe('#loadAddExtraInfoPage', () => {
  describe('when session not exists', () => {
    it('redirects to sign in page', () => {
      const context = Symbol('context');
      const generator = loadAddExtraInfoPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({ currentUser: {} }).value).toEqual(
        call(redirect, context, signIn)
      );
    });
  });

  describe('when profile filled', () => {
    it('redirects to home page', () => {
      const context = Symbol('context');
      const generator = loadAddExtraInfoPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({
        currentUser: {
          id: 1,
          phone: '123456',
          jobTitle: 'Singer',
          organization: 'LaLaLand'
        }
      }).value).toEqual(
        call(redirect, context, home)
      );
    });
  });
});
