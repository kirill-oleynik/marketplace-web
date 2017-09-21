const { fetchAll } = require('./../../app/actions/favorites_actions');
const { FAVORITES_FETCH_ALL } = require('./../../app/constants');

describe('#fetchAll', () => {
  test('it has FAVORITES_FETCH_ALL type', () => {
    const action = fetchAll();

    expect(action).toEqual({
      type: FAVORITES_FETCH_ALL
    });
  });
});
