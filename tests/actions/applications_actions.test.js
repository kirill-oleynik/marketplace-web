const {
  fetch, addToFavorites, removeFromFavorites, fetchApplicationGallery,
  fetchRating
} = require('./../../app/actions/applications_actions');

const {
  APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES,
  APPLICATIONS_REMOVE_FROM_FAVORITES,
  APPLICATIONS_FETCH_GALLERY,
  APPLICATIONS_RATING_FETCH
} = require('./../../app/constants');

describe('#fetch', () => {
  test('it has APPLICATION_FETCH type and given id in payload', () => {
    const id = Symbol('id');
    const action = fetch(id);

    expect(action).toEqual({
      type: APPLICATION_FETCH,
      payload: { id }
    });
  });
});

describe('#addToFavorites', () => {
  test('it has APPLICATIONS_ADD_TO_FAVORITES type and application id in payload', () => {
    const id = Symbol('id');
    const action = addToFavorites({ id });

    expect(action).toEqual({
      type: APPLICATIONS_ADD_TO_FAVORITES,
      payload: { id }
    });
  });
});

describe('#removeFromFavorites', () => {
  test('it has APPLICATIONS_REMOVE_FROM_FAVORITES type and favorite id in payload', () => {
    const id = Symbol('id');
    const action = removeFromFavorites({ id });

    expect(action).toEqual({
      type: APPLICATIONS_REMOVE_FROM_FAVORITES,
      payload: { id }
    });
  });
});

describe('#fetch', () => {
  test('it has APPLICATIONS_FETCH_GALLERY type and application slug in payload', () => {
    const slug = Symbol('slug');
    const action = fetchApplicationGallery(slug);

    expect(action).toEqual({
      type: APPLICATIONS_FETCH_GALLERY,
      payload: { slug }
    });
  });
});

describe('#fetchRating', () => {
  test('it has APPLICATIONS_RATING_FETCH type and passed payload', () => {
    const slug = Symbol('slug');
    const action = fetchRating(slug);

    expect(action).toEqual({
      type: APPLICATIONS_RATING_FETCH,
      payload: { slug }
    });
  });
});
