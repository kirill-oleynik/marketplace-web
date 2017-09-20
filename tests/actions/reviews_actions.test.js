const {
  createReview
} = require('./../../app/actions/reviews_actions');

const {
  REVIEW_CREATE
} = require('./../../app/constants');

describe('#createReview', () => {
  test('it has REVIEW_CREATE type and passed data in payload', () => {
    const data = Symbol('data');
    const action = createReview(data);

    expect(action).toEqual({
      type: REVIEW_CREATE,
      payload: { data }
    });
  });
});
