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

describe('#getProfileErrors', () => {
  test('it returns correct data', () => {
    expect(profileSelectors.getProfileErrors({
      profile: {
        errors: {
          test: 'value'
        }
      }
    })).toEqual({test: 'value'});
  });
});
