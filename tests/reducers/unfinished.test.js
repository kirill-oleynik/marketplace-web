import { route, unfinishedAction } from 'app/reducers/unfinished';
import { FINISH, PAGE_LOAD, UNFINISHED_SET, UNFINISHED_CLEAR } from 'app/constants';

describe('#route', () => {
  test('it has correct initial state', () => {
    expect(
      route(undefined, {})
    ).toEqual({});
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

  test('it handles PAGE_LOAD_FINISH action type', () => {
    const routeData = Symbol('RouteData');
    const state = route({ routeData }, {
      type: PAGE_LOAD + FINISH,
      payload: {
        name: 'home'
      }
    });

    expect(state).toEqual({});
  });
});

describe('#unfinishedAction', () => {
  test('it has correct initial state', () => {
    expect(
      unfinishedAction(undefined, {})
    ).toEqual({});
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

  test('it handles PAGE_LOAD_FINISH action type', () => {
    const action = Symbol('Action');
    const state = unfinishedAction({ action }, {
      type: PAGE_LOAD + FINISH,
      payload: {
        name: 'home'
      }
    });

    expect(state).toEqual({});
  });
});
