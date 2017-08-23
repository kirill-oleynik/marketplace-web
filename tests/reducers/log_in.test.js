const reducer = require('../../app/reducers/log_in').default;
const currentUserConstants = require('./../../app/constants/current_user_constants');

describe('#errors', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {}).errors;
    expect(nextState).toEqual({});
  });

  test('it handles CURRENT_USER_LOG_IN_FAILURE action type', () => {
    const nextState = reducer(undefined, {
      type: currentUserConstants.CURRENT_USER_LOG_IN_FAILURE,
      payload: {
        error: {
          violations: 'Violations'
        }
      }
    }).errors;

    expect(nextState).toEqual('Violations');
  });
});
