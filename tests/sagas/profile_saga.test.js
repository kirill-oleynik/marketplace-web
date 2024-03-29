const Router = require('next/router').default;
const { put, call } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');

const {
  createUserProfile, updateUserProfile, updateUserPassword
} = require('../../app/sagas/profile_saga');
const { home } = require('../../app/routes');
const {
  createProfile, updateUser, updatePassword
} = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE,
  PROFILE_CREATE, PROFILE_UPDATE, PASSWORD_UPDATE, PROFILE_MODAL_TOGGLE
} = require('../../app/constants');

describe('#createUserProfile', () => {
  it('handles successful createProfile api call', () => {
    const data = Symbol('data');
    const profile = Symbol('profile');
    const createProfileResponse = {
      data: {
        data: profile
      }
    };

    const generator = createUserProfile({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      put({ type: PROFILE_CREATE + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createProfile, { data })
    );

    expect(generator.next(createProfileResponse).value).toEqual(
      put({
        type: PROFILE_CREATE + SUCCESS,
        payload: { profile }
      })
    );

    expect(generator.next().value).toEqual(
      call([Router, 'push'], home)
    );
  });

  it('handles failed createProfile api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const createProfileError = {
      response: {
        data: { error }
      }
    };

    const generator = createUserProfile({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      put({ type: PROFILE_CREATE + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(createProfile, { data })
    );

    expect(generator.throw(createProfileError).value).toEqual(
      put({
        type: PROFILE_CREATE + FAILURE,
        payload: {
          error,
          response: createProfileError.response
        }
      })
    );
  });
});

describe('#updateUserProfile', () => {
  it('handles successful updateUser api call', () => {
    const data = Symbol('data');
    const profile = Symbol('profile');
    const updateUserResponse = {
      data: {
        data: profile
      }
    };

    const generator = updateUserProfile({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(updateUser, { data })
    );

    expect(generator.next(updateUserResponse).value).toEqual(
      put({
        type: PROFILE_UPDATE + SUCCESS,
        payload: { profile }
      })
    );

    expect(generator.next().value).toEqual(
      put({
        type: PROFILE_MODAL_TOGGLE,
        payload: {
          modalState: false
        }
      })
    );
  });

  it('handles failed updateUser api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const updateUserError = {
      response: {
        data: { error }
      }
    };

    const generator = updateUserProfile({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(updateUser, { data })
    );

    expect(generator.throw(updateUserError).value).toEqual(
      put({
        type: PROFILE_UPDATE + FAILURE,
        payload: {
          error,
          response: updateUserError.response
        }
      })
    );
  });
});

describe('#updateUserPassword', () => {
  it('handles successful updatePassword api call', () => {
    const data = Symbol('data');
    const profile = Symbol('profile');
    const updatePasswordResponse = {
      data: {
        data: profile
      }
    };

    const generator = updateUserPassword({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(updatePassword, { data })
    );

    expect(generator.next(updatePasswordResponse).value).toEqual(
      put({
        type: PASSWORD_UPDATE + SUCCESS,
        payload: { profile }
      })
    );

    expect(generator.next().value).toEqual(
      put({
        type: PROFILE_MODAL_TOGGLE,
        payload: {
          modalState: false
        }
      })
    );
  });

  it('handles failed updatePassword api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const updatePasswordError = {
      response: {
        data: { error }
      }
    };

    const generator = updateUserPassword({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(updatePassword, { data })
    );

    expect(generator.throw(updatePasswordError).value).toEqual(
      put({
        type: PASSWORD_UPDATE + FAILURE,
        payload: {
          error,
          response: updatePasswordError.response
        }
      })
    );
  });
});
