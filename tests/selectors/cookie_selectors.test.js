const { getCookie } = require('../../app/selectors/cookie_selectors');

describe('#getCookie', () => {
  test('it returns correct data', () => {
    expect(
      getCookie({ cookie: 'Test' })
    ).toEqual('Test');
  });
});
