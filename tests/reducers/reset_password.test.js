const reducer = require('../../app/reducers/reset_password').default;
const {
  FAILURE, RESET_PASSWORD_REQUEST
} = require('../../app/constants');

describe('#requestErrors', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState.requestErrors).toEqual({});
  });

  test('it handles RESET_PASSWORD_REQUEST_FAILURE action type', () => {
    const nextState = reducer(undefined, {
      type: RESET_PASSWORD_REQUEST + FAILURE,
      payload: {
        error: {
          violations: 'Violations'
        }
      }
    });

    expect(nextState.requestErrors).toEqual('Violations');
  });
});
