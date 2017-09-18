const {
  fetch, addToFavorites, removeFromFavorites
} = require('./../../app/actions/applications_actions');

const {
  APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES,
  APPLICATIONS_REMOVE_FROM_FAVORITES
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
  test('it has APPLICATIONS_REMOVE_FROM_FAVORITES type and application favorite id in payload', () => {
    const id = Symbol('id');
    const action = removeFromFavorites({
      favorite: { id }
    });

    expect(action).toEqual({
      type: APPLICATIONS_REMOVE_FROM_FAVORITES,
      payload: { id }
    });
  });
});
