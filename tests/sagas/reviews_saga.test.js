const { put, call } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');
const { createApplicationReview } = require('../../app/sagas/reviews_saga');
const { createReview } = require('../../app/services/api');
const { REQUEST, SUCCESS, FAILURE, REVIEW_CREATE } = require('../../app/constants');

describe('#createApplicationReview', () => {
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
