const Router = require('next/router').default;
const { put, call } = require('redux-saga/effects');
const { createUserProfile } = require('../../app/sagas/profile_saga');
const { home } = require('../../app/routes');
const { createProfile } = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, PROFILE_CREATE
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
      call(createProfile, data)
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
      call(createProfile, data)
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
