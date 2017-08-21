const currentUserSelectors = require('../../app/selectors/current_user_selectors');

describe('#getCurrentUser', () => {
  test('it returns correct data', () => {
    expect(currentUserSelectors.getCurrentUser({
      currentUser: 'Test'
    })).toEqual('Test');
  });
});
