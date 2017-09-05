const { errors } = require('../../app/reducers/sign_in');
const { FAILURE, AUTH_SIGN_IN } = require('./../../app/constants');

describe('#errors', () => {
  test('it has correct initial state', () => {
    const state = errors(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles AUTH_SIGN_IN_FAILURE', () => {
    const violations = Symbol('Violations');
    const state = errors(undefined, {
      type: AUTH_SIGN_IN + FAILURE,
      payload: {
        error: { violations }
      }
    });

    expect(state).toEqual(violations);
  });
});
