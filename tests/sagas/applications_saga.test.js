const { put } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');
const { fetchApplication, addToFavorites, removeFromFavorites } = require('../../app/sagas/applications_saga');
const { fetchSingleApplication, createFavorites, deleteFavorites } = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES
} = require('../../app/constants');

describe('#fetchApplication', () => {
  it('handles successful fetchSingleApplication api call', () => {
    const id = Symbol('id');
    const application = Symbol('application');
    const fetchApplicationResponse = {
      data: {
        data: application
      }
    };

    const generator = fetchApplication({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATION_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchSingleApplication, { id })
    );

    expect(generator.next(fetchApplicationResponse).value).toEqual(
      put({
        type: APPLICATION_FETCH + SUCCESS,
        payload: { application }
      })
    );
  });

  it('handles failed fetchSingleApplication api call', () => {
    const id = Symbol('id');
    const error = Symbol('error');
    const fetchApplicationError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchApplication({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATION_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchSingleApplication, { id })
    );

    expect(generator.throw(fetchApplicationError).value).toEqual(
      put({
        type: APPLICATION_FETCH + FAILURE,
        payload: {
          error,
          response: fetchApplicationError.response
        }
      })
    );
  });
});

describe('#addToFavorites', () => {
  it('handles successful createFavorites api call', () => {
    const id = Symbol('id');
    const favorite = Symbol('favorite');
    const createFavoritesResponse = {
      data: {
        data: favorite
      }
    };

    const generator = addToFavorites({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_ADD_TO_FAVORITES + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createFavorites, { id })
    );

    expect(generator.next(createFavoritesResponse).value).toEqual(
      put({
        type: APPLICATIONS_ADD_TO_FAVORITES + SUCCESS,
        payload: { favorite }
      })
    );
  });

  it('handles failed createFavorites api call', () => {
    const id = Symbol('id');
    const error = Symbol('error');
    const createFavoritesError = {
      response: {
        data: { error }
      }
    };

    const generator = addToFavorites({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_ADD_TO_FAVORITES + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createFavorites, { id })
    );

    expect(generator.throw(createFavoritesError).value).toEqual(
      put({
        type: APPLICATIONS_ADD_TO_FAVORITES + FAILURE,
        payload: {
          error,
          response: createFavoritesError.response
        }
      })
    );
  });
});

describe('#removeFromFavorites', () => {
  it('handles successful deleteFavorites api call', () => {
    const id = Symbol('id');
    const favorite = Symbol('favorite');
    const deleteFavoritesResponse = {
      data: {
        data: favorite
      }
    };

    const generator = removeFromFavorites({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_REMOVE_FROM_FAVORITES + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(deleteFavorites, { id })
    );

    expect(generator.next(deleteFavoritesResponse).value).toEqual(
      put({
        type: APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS,
        payload: { favorite }
      })
    );
  });

  it('handles failed deleteFavorites api call', () => {
    const id = Symbol('id');
    const error = Symbol('error');
    const deleteFavoritesError = {
      response: {
        data: { error }
      }
    };

    const generator = removeFromFavorites({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_REMOVE_FROM_FAVORITES + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(deleteFavorites, { id })
    );

    expect(generator.throw(deleteFavoritesError).value).toEqual(
      put({
        type: APPLICATIONS_REMOVE_FROM_FAVORITES + FAILURE,
        payload: {
          error,
          response: deleteFavoritesError.response
        }
      })
    );
  });
});