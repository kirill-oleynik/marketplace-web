const Router = require('next/router').default;
const { put, fork, call, take } = require('redux-saga/effects');

const { callApi, replyUnfinishedRoute } = require('../../app/effects');
const { home, addExtraInfo } = require('../../app/routes');
const {
  signUp, signIn, signOut, fetchUser, signInRedirect, signUpSignInRedirect
} = require('../../app/sagas/auth_saga');
const {
  createUser, createSession, destroySession, fetchCurrentUser
} = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, AUTH_SIGN_UP,
  AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_FETCH_USER
} = require('../../app/constants');

describe('#signUp', () => {
  it('handles successful createUser api call', () => {
    const data = Symbol('data');
    const user = Symbol('user');
    const createUserResponse = {
      data: {
        data: user
      }
    };

    const generator = signUp(data);

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_UP + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createUser, { data })
    );

    expect(generator.next(createUserResponse).value).toEqual(
      put({
        type: AUTH_SIGN_UP + SUCCESS,
        payload: { user }
      })
    );
  });

  it('handles failed createUser api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const createUserError = {
      response: {
        data: { error }
      }
    };

    const generator = signUp(data);

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_UP + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createUser, { data })
    );

    expect(generator.throw(createUserError).value).toEqual(
      put({
        type: AUTH_SIGN_UP + FAILURE,
        payload: {
          error,
          response: createUserError.response
        }
      })
    );
  });
});

describe('#signIn', () => {
  it('handles successful createSession api call', () => {
    const data = Symbol('data');
    const session = Symbol('session');
    const createSessionResponse = {
      data: {
        data: session
      }
    };

    const generator = signIn(data);

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_IN + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createSession, { data })
    );

    expect(generator.next(createSessionResponse).value).toEqual(
      put({
        type: AUTH_SIGN_IN + SUCCESS,
        payload: { session }
      })
    );
  });

  it('handles failed createUser api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const createSessionError = {
      response: {
        data: { error }
      }
    };

    const generator = signIn(data);

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_IN + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createSession, { data })
    );

    expect(generator.throw(createSessionError).value).toEqual(
      put({
        type: AUTH_SIGN_IN + FAILURE,
        payload: {
          error,
          response: createSessionError.response
        }
      })
    );
  });
});

describe('#signOut', () => {
  it('handles successful destroySession api call', () => {
    const destroySessionResponse = {
      data: {}
    };

    const generator = signOut();

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_OUT + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(destroySession)
    );

    expect(generator.next(destroySessionResponse).value).toEqual(
      put({
        type: AUTH_SIGN_OUT + SUCCESS
      })
    );

    expect(generator.next().value).toEqual(
      call([Router, 'push'], home, home, { shallow: true })
    );
  });

  it('handles failed destroySession api call', () => {
    const error = Symbol('error');
    const destroySessionError = {
      response: {
        data: { error }
      }
    };

    const generator = signOut();

    expect(generator.next().value).toEqual(
      put({ type: AUTH_SIGN_OUT + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(destroySession)
    );

    expect(generator.throw(destroySessionError).value).toEqual(
      put({
        type: AUTH_SIGN_OUT + FAILURE,
        payload: {
          error,
          response: destroySessionError.response
        }
      })
    );
  });
});

describe('#fetchUser', () => {
  it('handles successful fetchUser api call', () => {
    const user = Symbol('user');
    const fetchUserResponse = {
      data: {
        data: user
      }
    };

    const generator = fetchUser();

    expect(generator.next().value).toEqual(
      put({ type: AUTH_FETCH_USER + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchCurrentUser)
    );

    expect(generator.next(fetchUserResponse).value).toEqual(
      put({
        type: AUTH_FETCH_USER + SUCCESS,
        payload: { user }
      })
    );
  });

  it('handles failed fetchUser api call', () => {
    const error = Symbol('error');
    const fetchUserError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchUser();

    expect(generator.next().value).toEqual(
      put({ type: AUTH_FETCH_USER + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(fetchCurrentUser)
    );

    expect(generator.throw(fetchUserError).value).toEqual(
      put({
        type: AUTH_FETCH_USER + FAILURE,
        payload: {
          error,
          response: fetchUserError.response
        }
      })
    );
  });
});

describe('#signInRedirect', () => {
  it('runs sign in flow', () => {
    const data = {
      email: 'johndou@example.com',
      password: '123456'
    };

    const action = {
      payload: { data }
    };

    const generator = signInRedirect(action);

    expect(generator.next().value).toEqual(
      fork(signIn, data)
    );

    expect(generator.next().value).toEqual(
      take(AUTH_SIGN_IN + SUCCESS)
    );

    expect(generator.next().value).toEqual(
      fork(fetchUser)
    );

    expect(generator.next().value).toEqual(
      take(AUTH_FETCH_USER + SUCCESS)
    );

    expect(generator.next().value).toEqual(
      call(replyUnfinishedRoute)
    );

    expect(generator.next().value).toEqual(
      call([Router, 'replace'], home)
    );
  });
});

describe('#signUpSignInRedirect', () => {
  it('runs sign up flow', () => {
    const sessionData = {
      email: 'johndou@example.com',
      password: '123456'
    };

    const userData = {
      ...sessionData,
      firstName: 'John',
      lastName: 'Dou'
    };

    const action = {
      payload: {
        data: userData
      }
    };

    const generator = signUpSignInRedirect(action);

    expect(generator.next().value).toEqual(
      fork(signUp, userData)
    );

    expect(generator.next().value).toEqual(
      take(AUTH_SIGN_UP + SUCCESS)
    );

    expect(generator.next().value).toEqual(
      fork(signIn, sessionData)
    );

    expect(generator.next().value).toEqual(
      take(AUTH_SIGN_IN + SUCCESS)
    );

    expect(generator.next().value).toEqual(
      fork(fetchUser)
    );

    expect(generator.next().value).toEqual(
      take(AUTH_FETCH_USER + SUCCESS)
    );

    expect(generator.next().value).toEqual(
      call(replyUnfinishedRoute)
    );

    expect(generator.next().value).toEqual(
      call([Router, 'replace'], addExtraInfo)
    );
  });
});
