const { route, unfinishedAction } = require('../../app/reducers/unfinished');
const { UNFINISHED_SET, UNFINISHED_CLEAR } = require('./../../app/constants');

describe('#route', () => {
  test('it has correct initial state', () => {
    const state = route(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles UNFINISHED_SET', () => {
    const routeData = Symbol('routeData');
    const state = route(undefined, {
      type: UNFINISHED_SET,
      payload: {
        route: routeData
      }
    });

    expect(state).toEqual(routeData);
  });

  test('it handles UNFINISHED_CLEAR', () => {
    const state = route(
      {
        path: '/test'
      },
      {
        type: UNFINISHED_CLEAR
      }
    );

    expect(state).toEqual({});
  });
});

describe('#unfinishedAction', () => {
  test('it has correct initial state', () => {
    const state = unfinishedAction(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles UNFINISHED_SET', () => {
    const unfinishedActionData = Symbol('unfinishedActionData');
    const state = unfinishedAction(undefined, {
      type: UNFINISHED_SET,
      payload: {
        action: unfinishedActionData
      }
    });

    expect(state).toEqual(unfinishedActionData);
  });

  test('it handles UNFINISHED_CLEAR', () => {
    const state = unfinishedAction(
      {
        unfinishedAction: {
          type: 'TEST'
        }
      },
      {
        type: UNFINISHED_CLEAR
      }
    );

    expect(state).toEqual({});
  });
});
