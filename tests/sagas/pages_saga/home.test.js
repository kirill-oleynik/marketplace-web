import { put, take } from 'redux-saga/effects';

import { fetchAll } from 'app/actions/categories_actions';
import { SUCCESS, FAILURE, CATEGORIES_FETCH_ALL } from 'app/constants';

import loadHomePage from 'app/sagas/pages_saga/home';

describe('#loadHomePage', () => {
  it('loads home page data', () => {
    const generator = loadHomePage();

    expect(generator.next().value).toEqual(
      put(
        fetchAll()
      )
    );

    expect(generator.next().value).toEqual(
      take([CATEGORIES_FETCH_ALL + SUCCESS, CATEGORIES_FETCH_ALL + FAILURE])
    );
  });
});
