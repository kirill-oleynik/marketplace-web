const { getEvent } = require('../../app/selectors/notifications_selectors');

describe('#getEvent', () => {
  test('it returns notifications event', () => {
    expect(
      getEvent({
        notifications: {
          event: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
