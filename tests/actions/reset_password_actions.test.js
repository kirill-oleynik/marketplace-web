const {
  resetPasswordRequest, resetPasswordConfirm
} = require('./../../app/actions/reset_password_actions');

const {
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} = require('../../app/constants');

describe('#resetPasswordRequest', () => {
  test('it has RESET_PASSWORD_REQUEST type and passed data in payload', () => {
    const data = Symbol('data');
    const action = resetPasswordRequest(data);

    expect(action).toEqual({
      type: RESET_PASSWORD_REQUEST,
      payload: { data }
    });
  });
});

describe('#resetPasswordConfirm', () => {
  test('it has RESET_PASSWORD_CONFIRM type and passed data in payload', () => {
    const data = Symbol('data');
    const action = resetPasswordConfirm(data);

    expect(action).toEqual({
      type: RESET_PASSWORD_CONFIRM,
      payload: { data }
    });
  });
});
