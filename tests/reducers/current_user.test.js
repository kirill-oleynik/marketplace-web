const currentUser = require('../../app/reducers/current_user').default;
const {
  SUCCESS, PROFILE_CREATE, AUTH_FETCH_USER, AUTH_SIGN_OUT, PROFILE_UPDATE
} = require('./../../app/constants');

describe('#currentUser', () => {
  test('it has correct initial state', () => {
    const state = currentUser(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles AUTH_FETCH_USER_SUCCESS', () => {
    const user = Symbol('User');
    const state = currentUser(undefined, {
      type: AUTH_FETCH_USER + SUCCESS,
      payload: { user }
    });

    expect(state).toEqual(user);
  });

  test('it handles PROFILE_CREATE_SUCCESS', () => {
    const profile = { id: 1 };
    const state = currentUser(
      {
        email: 'johndou@example.com'
      },
      {
        type: PROFILE_CREATE + SUCCESS,
        payload: { profile }
      }
    );

    expect(state).toEqual({
      id: 1,
      email: 'johndou@example.com'
    });
  });

  test('it handles PROFILE_UPDATE_SUCCESS', () => {
    const profile = { id: 1 };
    const state = currentUser(
      {
        email: 'johndou@example.com'
      },
      {
        type: PROFILE_UPDATE + SUCCESS,
        payload: { profile }
      }
    );

    expect(state).toEqual({
      id: 1,
      email: 'johndou@example.com'
    });
  });

  test('it handles AUTH_SIGN_OUT_SUCCESS action type', () => {
    const nextState = currentUser(
      {
        id: 1
      },
      {
        type: AUTH_SIGN_OUT + SUCCESS
      }
    );

    expect(nextState).toEqual({});
  });
});
