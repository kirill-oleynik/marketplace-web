const { NOTIFICATION_HIDE } = require('./../../app/constants');
const { hide } = require('./../../app/actions/notifications_actions');

describe('#hide', () => {
  test('it has NOTIFICATION_HIDE type', () => {
    const action = hide();

    expect(action).toEqual({
      type: NOTIFICATION_HIDE
    });
  });
});
