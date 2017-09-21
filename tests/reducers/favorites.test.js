const { ids, byId } = require('../../app/reducers/favorites');
const {
  SUCCESS, APPLICATIONS_ADD_TO_FAVORITES,
  APPLICATIONS_REMOVE_FROM_FAVORITES, FAVORITES_FETCH_ALL
} = require('../../app/constants');

describe('#ids', () => {
  test('it has correct initial state', () => {
    const nextState = ids(undefined, {});

    expect(nextState).toEqual([]);
  });

  test('it handles FAVORITES_FETCH_ALL_SUCCESS action type', () => {
    const favoriteId = Symbol('favoriteId');

    const nextState = ids(undefined, {
      type: FAVORITES_FETCH_ALL + SUCCESS,
      payload: {
        favorites: [{
          id: favoriteId,
          applicationId: 1
        }]
      }
    });

    expect(nextState).toEqual([favoriteId]);
  });

  test('it handles APPLICATIONS_ADD_TO_FAVORITES_SUCCESS action type', () => {
    const firstFavoriteId = Symbol('firstFavoriteId');
    const secondFavoriteId = Symbol('secondFavoriteId');

    const nextState = ids([firstFavoriteId], {
      type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
      payload: {
        favorite: {
          id: secondFavoriteId
        }
      }
    });

    expect(nextState).toEqual([secondFavoriteId, firstFavoriteId]);
  });

  test('it handles APPLICATIONS_REMOVE_FROM_FAVORITES_SUCCESS action type', () => {
    const firstFavoriteId = Symbol('firstFavoriteId');
    const secondFavoriteId = Symbol('secondFavoriteId');

    const nextState = ids([firstFavoriteId, secondFavoriteId], {
      type: APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS,
      payload: {
        favorite: {
          id: secondFavoriteId
        }
      }
    });

    expect(nextState).toEqual([firstFavoriteId]);
  });
});

describe('#byId', () => {
  test('it has correct initial state', () => {
    const nextState = byId(undefined, {});

    expect(nextState).toEqual({});
  });

  test('it handles FAVORITES_FETCH_ALL_SUCCESS action type', () => {
    const favoriteId = Symbol('favoriteId');

    const favorite = {
      id: favoriteId,
      applicationId: 1
    };

    const nextState = byId(undefined, {
      type: FAVORITES_FETCH_ALL + SUCCESS,
      payload: {
        favorites: [favorite]
      }
    });

    expect(nextState).toEqual({
      [favoriteId]: favorite
    });
  });

  test('it handles APPLICATIONS_ADD_TO_FAVORITES_SUCCESS action type', () => {
    const favoriteId = Symbol('favoriteId');

    const favorite = {
      id: favoriteId,
      applicationId: 1
    };

    const nextState = byId({},
      {
        type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
        payload: {
          favorite
        }
      }
    );

    expect(nextState).toEqual({
      [favoriteId]: favorite
    });
  });
});
