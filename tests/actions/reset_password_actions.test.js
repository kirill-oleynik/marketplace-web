const {
  resetPasswordRequest
} = require('./../../app/actions/reset_password_actions');

const {
  RESET_PASSWORD_REQUEST
} = require('../../app/constants');

const {
  REVIEW_CREATE
} = require('./../../app/constants');

describe('#resetPassword', () => {
  test('it has RESET_PASSWORD_REQUEST type and passed data in payload', () => {
    const data = Symbol('data');
    const action = resetPasswordRequest(data);

    expect(action).toEqual({
      type: RESET_PASSWORD_REQUEST,
      payload: { data }
    });
  });
});
