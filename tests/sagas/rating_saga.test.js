import { put, call } from 'redux-saga/effects';

import { callApi, isUserSignedIn, saveUnfinishedAndRedirect } from 'app/effects';
import { fetchApplicationRating, createApplicationReview } from 'app/sagas/rating_saga';
import { fetchRating, createReview } from 'app/services/api';
import { REQUEST, SUCCESS, FAILURE, APPLICATIONS_RATING_FETCH, REVIEW_CREATE } from 'app/constants';

describe('#fetchApplicationRating', () => {
  it('handles successful fetchRating api call', () => {
    const slug = Symbol('slug');
    const rating = Symbol('rating');
    const fetchRatingResponse = {
      data: {
        data: rating
      }
    };

    const generator = fetchApplicationRating(slug);

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

    const generator = fetchApplicationRating(slug);

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
