const { fetch } = require('./../../app/actions/applications_actions');
const { APPLICATION_FETCH } = require('./../../app/constants');

describe('#fetch', () => {
  test('it has APPLICATION_FETCH type and given id in payload', () => {
    const id = Symbol('id');
    const action = fetch(id);

    expect(action).toEqual({
      type: APPLICATION_FETCH,
      payload: {
        id: id
      }
    });
  });
});
