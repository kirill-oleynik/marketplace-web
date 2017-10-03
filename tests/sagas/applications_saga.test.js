const { put, call } = require('redux-saga/effects');

const {
  callApi, isUserSignedIn, saveUnfinishedAndRedirect
} = require('../../app/effects');

const {
  fetchGallery, fetchApplication, addToFavorites, removeFromFavorites,
  fetchApplicationRating, createApplicationReview
} = require('../../app/sagas/applications_saga');

const {
  fetchSingleApplication, createFavorites,
  deleteFavorites, fetchApplicationGallery, fetchRating, createReview
} = require('../../app/services/api');

const {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES,
  APPLICATIONS_FETCH_GALLERY,
  APPLICATIONS_RATING_FETCH, REVIEW_CREATE
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
  describe('when user signed in', () => {
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
        call(isUserSignedIn)
      );

      expect(generator.next(true).value).toEqual(
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
        call(isUserSignedIn)
      );

      expect(generator.next(true).value).toEqual(
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

  describe('when user not signed in', () => {
    it('saves unfinished action', () => {
      const id = Symbol('id');
      const action = { payload: { id } };

      const generator = addToFavorites(action);

      expect(generator.next().value).toEqual(
        call(isUserSignedIn)
      );

      expect(generator.next(false).value).toEqual(
        call(saveUnfinishedAndRedirect, action)
      );
    });
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

describe('#fetchGallery', () => {
  it('handles successful fetchApplicationGallery api call', () => {
    const slug = Symbol('slug');
    const gallery = Symbol('gallery');
    const fetchGalleryResponse = {
      data: {
        data: gallery
      }
    };

    const generator = fetchGallery({ payload: { slug } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_FETCH_GALLERY + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchApplicationGallery, { slug })
    );

    expect(generator.next(fetchGalleryResponse).value).toEqual(
      put({
        type: APPLICATIONS_FETCH_GALLERY + SUCCESS,
        payload: { gallery }
      })
    );
  });

  it('handles failed fetchApplicationGallery api call', () => {
    const slug = Symbol('slug');
    const error = Symbol('error');
    const fetchGalleryError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchGallery({ payload: { slug } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATIONS_FETCH_GALLERY + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchApplicationGallery, { slug })
    );

    expect(generator.throw(fetchGalleryError).value).toEqual(
      put({
        type: APPLICATIONS_FETCH_GALLERY + FAILURE,
        payload: {
          error,
          response: fetchGalleryError.response
        }
      })
    );
  });
});

describe('#fetchApplicationRating', () => {
  it('handles successful fetchRating api call', () => {
    const slug = Symbol('slug');
    const rating = Symbol('rating');
    const fetchRatingResponse = {
      data: {
        data: rating
      }
    };

    const generator = fetchApplicationRating({
      payload: {
        data: { slug }
      }
    });

    expect(generator.next().value).toEqual(
      callApi(fetchRating, { slug })
    );

    expect(generator.next(fetchRatingResponse).value).toEqual(
      put({
        type: APPLICATIONS_RATING_FETCH + SUCCESS,
        payload: { rating }
      })
    );
  });

  it('handles failed fetchRating api call', () => {
    const slug = Symbol('slug');
    const error = Symbol('error');
    const fetchRatingError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchApplicationRating({
      payload: {
        data: { slug }
      }
    });

    expect(generator.next().value).toEqual(
      callApi(fetchRating, { slug })
    );

    expect(generator.throw(fetchRatingError).value).toEqual(
      put({
        type: APPLICATIONS_RATING_FETCH + FAILURE,
        payload: {
          error,
          response: fetchRatingError.response
        }
      })
    );
  });
});

describe('#createApplicationReview', () => {
  describe('when user signed in', () => {
    it('handles successful createReview api call', () => {
      const data = Symbol('data');
      const review = Symbol('review');
      const createReviewResponse = {
        data: {
          data: review
        }
      };

      const generator = createApplicationReview({
        payload: { data }
      });

      expect(generator.next().value).toEqual(
        call(isUserSignedIn)
      );

      expect(generator.next(true).value).toEqual(
        put({ type: REVIEW_CREATE + REQUEST })
      );

      expect(generator.next().value).toEqual(
        callApi(createReview, { data })
      );

      expect(generator.next(createReviewResponse).value).toEqual(
        put({
          type: REVIEW_CREATE + SUCCESS,
          payload: { review }
        })
      );
    });

    it('handles failed createReview api call', () => {
      const data = Symbol('data');
      const error = Symbol('error');
      const createReviewError = {
        response: {
          data: { error }
        }
      };

      const generator = createApplicationReview({
        payload: { data }
      });

      expect(generator.next().value).toEqual(
        call(isUserSignedIn)
      );

      expect(generator.next(true).value).toEqual(
        put({ type: REVIEW_CREATE + REQUEST })
      );

      expect(generator.next().value).toEqual(
        callApi(createReview, { data })
      );

      expect(generator.throw(createReviewError).value).toEqual(
        put({
          type: REVIEW_CREATE + FAILURE,
          payload: {
            error,
            response: createReviewError.response
          }
        })
      );
    });
  });

  describe('when user not signed in', () => {
    it('saves unfinished action', () => {
      const id = Symbol('id');
      const action = { payload: { id } };

      const generator = createApplicationReview(action);

      expect(generator.next().value).toEqual(
        call(isUserSignedIn)
      );

      expect(generator.next(false).value).toEqual(
        call(saveUnfinishedAndRedirect, action)
      );
    });
  });
});
