const cookie = require('../../app/reducers/cookie').default;

describe('#cookie', () => {
  test('it has correct initial state', () => {
    const state = cookie(undefined, {});

    expect(state).toEqual('');
  });
});
