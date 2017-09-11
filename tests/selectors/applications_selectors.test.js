const {
  getById
} = require('../../app/selectors/applications_selectors');

describe('#getById', () => {
  test('it returns applications byId', () => {
    expect(
      getById({
        applications: {
          byId: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
