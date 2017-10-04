const { getRoute, getAction } = require('../../app/selectors/unfinished_selectors');

describe('#getRoute', () => {
  test('it returns correct data', () => {
    expect(
      getRoute({
        unfinished: {
          route: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getAction', () => {
  test('it returns correct data', () => {
    expect(
      getAction({
        unfinished: {
          action: 'Test'
        }
      })
    ).toEqual('Test');
  });
});
