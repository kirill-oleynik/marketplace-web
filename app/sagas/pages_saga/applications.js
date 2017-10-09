import { all, put, take } from 'redux-saga/effects';

import { fetchAll } from '../../actions/categories_actions';
import {
  fetch, fetchApplicationGallery, fetchRating
} from '../../actions/applications_actions';
import {
  SUCCESS, FAILURE, APPLICATION_FETCH, APPLICATIONS_FETCH_GALLERY,
  APPLICATIONS_RATING_FETCH, CATEGORIES_FETCH_ALL
} from '../../constants';

export default function* loadApplicationsPage({ query }) {
  yield put(
    fetchAll()
  );

  yield put(
    fetch(query.slug)
  );

  yield put(
    fetchRating(query.slug)
  );

  yield put(
    fetchApplicationGallery(query.slug)
  );

  yield all([
    take([APPLICATION_FETCH + SUCCESS, APPLICATION_FETCH + FAILURE]),
    take([APPLICATIONS_FETCH_GALLERY + SUCCESS, APPLICATIONS_FETCH_GALLERY + FAILURE]),
    take([APPLICATIONS_RATING_FETCH + SUCCESS, APPLICATIONS_RATING_FETCH + FAILURE]),
    take([CATEGORIES_FETCH_ALL + SUCCESS, CATEGORIES_FETCH_ALL + FAILURE])
  ]);
}
