const { getCurrentUser } = require('../../app/selectors/current_user_selectors');

describe('#getCurrentUser', () => {
  test('it returns correct data', () => {
    expect(
      getCurrentUser({ currentUser: 'Test' })
    ).toEqual('Test');
  });
});
