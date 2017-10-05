const { event } = require('../../app/reducers/notifications');
const { NOTIFICATION_SHOW, NOTIFICATION_HIDE } = require('./../../app/constants');

describe('#event', () => {
  test('it has correct initial state', () => {
    const state = event(undefined, {});

    expect(state).toEqual('');
  });

  test('it handles NOTIFICATIONS_SHOW', () => {
    const eventData = Symbol('eventData');
    const state = event(undefined, {
      type: NOTIFICATION_SHOW,
      payload: {
        event: eventData
      }
    });

    expect(state).toEqual(eventData);
  });

  test('it handles NOTIFICATIONS_HIDE', () => {
    const state = event(
      {
        event: 'test'
      },
      {
        type: NOTIFICATION_HIDE
      }
    );

    expect(state).toEqual('');
  });
});
