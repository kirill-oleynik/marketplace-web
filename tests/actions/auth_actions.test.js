const {
  signUp, signIn, signOut, fetchUser
} = require('./../../app/actions/auth_actions');

const {
  AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_FETCH_USER
} = require('./../../app/constants');

describe('#signUp', () => {
  test('it has AUTH_SIGN_UP type and passed data in payload', () => {
    const data = Symbol('data');
    const action = signUp(data);

    expect(action).toEqual({
      type: AUTH_SIGN_UP,
      payload: { data }
    });
  });
});

describe('#signIn', () => {
  test('it has AUTH_SIGN_IN type and passed data in payload', () => {
    const data = Symbol('data');
    const action = signIn(data);

    expect(action).toEqual({
      type: AUTH_SIGN_IN,
      payload: { data }
    });
  });
});

describe('#signOut', () => {
  test('it has AUTH_SIGN_OUT type', () => {
    const action = signOut();

    expect(action).toEqual({
      type: AUTH_SIGN_OUT
    });
  });
});

describe('#fetchUser', () => {
  test('it has AUTH_FETCH_USER type', () => {
    const action = fetchUser();

    expect(action).toEqual({
      type: AUTH_FETCH_USER
    });
  });
});
