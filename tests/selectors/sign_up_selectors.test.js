const signUpSelectors = require('../../app/selectors/sign_up_selectors');

describe('#getSignUpErrors', () => {
  test('it returns correct data', () => {
    expect(signUpSelectors.getSignUpErrors({
      signUp: {
        errors: 'Test'
      }
    })).toEqual('Test');
  });
});
