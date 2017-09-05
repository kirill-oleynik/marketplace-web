const { createProfile } = require('./../../app/actions/profile_actions');
const { PROFILE_CREATE } = require('./../../app/constants');

describe('#createProfile', () => {
  test('it has PROFILE_CREATE type and passed data in payload', () => {
    const data = Symbol('data');
    const action = createProfile(data);

    expect(action).toEqual({
      type: PROFILE_CREATE,
      payload: { data }
    });
  });
});
