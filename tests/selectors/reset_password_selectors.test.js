const resetPasswordSelectors = require('../../app/selectors/reset_password_selectors');

describe('#getResetPasswordRequestErrors', () => {
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

describe('#getResetPasswordConfirmErrors', () => {
  test('it returns correct data', () => {
    expect(resetPasswordSelectors.getResetPasswordConfirmErrors({
      resetPassword: {
        confirmErrors: {
          test: 'value'
        }
      }
    })).toEqual({test: 'value'});
  });
});
