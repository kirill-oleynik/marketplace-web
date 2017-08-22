const logInSelectors = require('../../app/selectors/log_in_selectors');

describe('#getLogInErrors', () => {
  test('it returns correct data', () => {
    expect(logInSelectors.getLogInErrors({
      logIn: {
        errors: 'Test'
      }
    })).toEqual('Test');
  });
});
