const { getSignInErrors } = require('../../app/selectors/sign_in_selectors');

describe('#getLogInErrors', () => {
  test('it returns correct data', () => {
    expect(
      getSignInErrors({
        signIn: {
          errors: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
