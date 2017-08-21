const reducer = require('../../app/reducers/sign_up').default;
const currentUserConstants = require('./../../app/constants/current_user_constants');

describe('#errors', () => {
  test('it has correct initial state', () => {
    const nextState = reducer(undefined, {}).errors;
    expect(nextState).toEqual({});
  });

  test('it handles CURRENT_USER_SIGN_UP_FAILURE action type', () => {
    const nextState = reducer(undefined, {
      type: currentUserConstants.CURRENT_USER_SIGN_UP_FAILURE,
      payload: {
        error: {
          violations: 'Violations'
        }
      }
    }).errors;

    expect(nextState).toEqual('Violations');
  });
});
