import { all, put, take } from 'redux-saga/effects';

import { fetchAll } from 'app/actions/categories_actions';
import {
  fetch, fetchApplicationGallery, fetchRating
} from 'app/actions/applications_actions';
import {
  SUCCESS, FAILURE, APPLICATION_FETCH, CATEGORIES_FETCH_ALL,
  APPLICATIONS_FETCH_GALLERY, APPLICATIONS_RATING_FETCH
} from 'app/constants';

import loadApplicationsPage from 'app/sagas/pages_saga/applications';

describe('#loadApplicationsPage', () => {
  it('loads application page data', () => {
    const slug = Symbol('slug');
    const generator = loadApplicationsPage({ query: { slug } });

    expect(generator.next().value).toEqual(
      put(
        fetchAll()
      )
    );

    expect(generator.next().value).toEqual(
      put(
        fetch(slug)
      )
    );

    expect(generator.next().value).toEqual(
      put(
        fetchRating(slug)
      )
    );

    expect(generator.next().value).toEqual(
      put(
        fetchApplicationGallery(slug)
      )
    );

    expect(generator.next().value).toEqual(
      all([
        take([APPLICATION_FETCH + SUCCESS, APPLICATION_FETCH + FAILURE]),
        take([APPLICATIONS_FETCH_GALLERY + SUCCESS, APPLICATIONS_FETCH_GALLERY + FAILURE]),
        take([APPLICATIONS_RATING_FETCH + SUCCESS, APPLICATIONS_RATING_FETCH + FAILURE]),
        take([CATEGORIES_FETCH_ALL + SUCCESS, CATEGORIES_FETCH_ALL + FAILURE])
      ])
    );
  });
});
