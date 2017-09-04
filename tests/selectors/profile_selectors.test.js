const profileSelectors = require('../../app/selectors/profile_selectors');

describe('#getProfileModalState', () => {
  test('it returns correct data', () => {
    expect(profileSelectors.getProfileModalState({
      profile: {
        modalIsActive: 'Test'
      }
    })).toEqual('Test');
  });
});
