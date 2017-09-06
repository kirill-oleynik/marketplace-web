const { fetch } = require('./../../app/actions/categories_actions');
const { CATEGORIES_FETCH } = require('./../../app/constants');

describe('#fetch', () => {
  test('it has CATEGORIES_FETCH type', () => {
    const action = fetch();

    expect(action).toEqual({
      type: CATEGORIES_FETCH
    });
  });
});
