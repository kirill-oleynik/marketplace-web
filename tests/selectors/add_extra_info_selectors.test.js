const {
  getAddExtraInfoErrors, getAddExtraInfoInProgress
} = require('../../app/selectors/add_extra_info_selectors');

describe('#getAddExtraInfoErrors', () => {
  test('it returns correct data', () => {
    expect(
      getAddExtraInfoErrors({
        addExtraInfo: {
          errors: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getAddExtraInfoInProgress', () => {
  test('it returns correct data', () => {
    expect(
      getAddExtraInfoInProgress({
        addExtraInfo: {
          inProgress: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
