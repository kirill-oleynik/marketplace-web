const moxios = require('moxios');
const currentUserActions = require('./../../app/actions/current_user_actions');
const currentUserConstants = require('./../../app/constants/current_user_constants');

describe('#signUp', () => {
  let action;

  beforeEach(() => {
    moxios.install();

    action = currentUserActions.signUp();
  });

  test('it has CURRENT_USER_SIGN_UP type', () => {
    expect(action.type).toEqual(currentUserConstants.CURRENT_USER_SIGN_UP);
  });

  test('it has request in payload', () => {
    expect(action.payload.request).toBeDefined();
  });

  afterEach(() => {
    moxios.uninstall();
  });
});
