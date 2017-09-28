const resetPasswordSelectors = require('../../app/selectors/reset_password_selectors');

describe('#getProfileErrors', () => {
  test('it returns correct data', () => {
    expect(resetPasswordSelectors.getResetPasswordRequestErrors({
      resetPassword: {
        requestErrors: {
          test: 'value'
        }
      }
    })).toEqual({test: 'value'});
  });
});
