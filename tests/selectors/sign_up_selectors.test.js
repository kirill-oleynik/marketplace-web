const { getSignUpErrors } = require('../../app/selectors/sign_up_selectors');

describe('#getSignUpErrors', () => {
  test('it returns correct data', () => {
    expect(
      getSignUpErrors({
        signUp: {
          errors: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
