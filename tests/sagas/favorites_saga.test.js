const { put } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');

const { fetchAllFavorites } = require('../../app/services/api');
const { fetchFavorites } = require('../../app/sagas/favorites_saga');
const { REQUEST, SUCCESS, FAILURE, FAVORITES_FETCH_ALL } = require('../../app/constants');

describe('#fetchFavorites', () => {
  it('handles successful fetchAllFavorites api call', () => {
    const favorites = Symbol('favorites');
    const fetchFavoritesResponse = {
      data: {
        data: favorites
      }
    };

    const generator = fetchFavorites();

    expect(generator.next().value).toEqual(
      put({ type: FAVORITES_FETCH_ALL + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchAllFavorites)
    );

    expect(generator.next(fetchFavoritesResponse).value).toEqual(
      put({
        type: FAVORITES_FETCH_ALL + SUCCESS,
        payload: { favorites }
      })
    );
  });

  it('handles failed fetchAllFavorites api call', () => {
    const error = Symbol('error');
    const fetchFavoritesError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchFavorites();

    expect(generator.next().value).toEqual(
      put({ type: FAVORITES_FETCH_ALL + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchAllFavorites)
    );

    expect(generator.throw(fetchFavoritesError).value).toEqual(
      put({
        type: FAVORITES_FETCH_ALL + FAILURE,
        payload: {
          error,
          response: fetchFavoritesError.response
        }
      })
    );
  });
});
