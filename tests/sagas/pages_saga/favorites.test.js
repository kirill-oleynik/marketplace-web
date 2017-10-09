import redirect from 'next-redirect';
import { all, put, call, take, select } from 'redux-saga/effects';

import { signIn } from 'app/routes';
import { fetchAll as fetchAllFavorites } from 'app/actions/favorites_actions';
import { fetchAll as fetchAllCategories } from 'app/actions/categories_actions';
import { SUCCESS, FAILURE, CATEGORIES_FETCH_ALL, FAVORITES_FETCH_ALL } from 'app/constants';

import loadFavoritesPage from 'app/sagas/pages_saga/favorites';

describe('#loadFavoritesPage', () => {
  describe('when session exists', () => {
    it('loads favorites page data', () => {
      const context = Symbol('context');
      const generator = loadFavoritesPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({ currentUser: { id: 1 } }).value).toEqual(
        put(
          fetchAllFavorites()
        )
      );

      expect(generator.next().value).toEqual(
        put(
          fetchAllCategories()
        )
      );

      expect(generator.next().value).toEqual(
        all([
          take([FAVORITES_FETCH_ALL + SUCCESS, FAVORITES_FETCH_ALL + FAILURE]),
          take([CATEGORIES_FETCH_ALL + SUCCESS, CATEGORIES_FETCH_ALL + FAILURE])
        ])
      );
    });
  });

  describe('when session not exists', () => {
    it('redirects to sign in page', () => {
      const context = Symbol('context');
      const generator = loadFavoritesPage(context);

      expect(generator.next().value).toEqual(
        select()
      );

      expect(generator.next({ currentUser: {} }).value).toEqual(
        call(redirect, context, signIn)
      );
    });
  });
});
