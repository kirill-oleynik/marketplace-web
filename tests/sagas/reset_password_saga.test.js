const Router = require('next/router').default;
const { put, call, takeEvery } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');
const { home } = require('../../app/routes');

const {
  performResetPasswordRequest
} = require('../../app/sagas/reset_password_saga');

const {
  resetPasswordRequest
} = require('../../app/services/api');

const {
  REQUEST, SUCCESS, FAILURE, RESET_PASSWORD_REQUEST
} = require('../../app/constants');

describe('#performResetPasswordRequest', () => {
  it('handles successful resetPasswordRequest api call', () => {
    const data = Symbol('data');
    const resetPassword = Symbol('resetPassword');
    const resetPasswordResponse = {
      data: {
        data: resetPassword
      }
    };

    const generator = performResetPasswordRequest({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      put({ type: RESET_PASSWORD_REQUEST + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(resetPasswordRequest, { data })
    );

    expect(generator.next(resetPasswordResponse).value).toEqual(
      put({
        type: RESET_PASSWORD_REQUEST + SUCCESS,
        payload: { resetPassword }
      })
    );

    expect(generator.next().value).toEqual(
      call([Router, 'push'], home)
    );
  });

  it('handles failed resetPasswordRequest api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const resetPasswordError = {
      response: {
        data: { error }
      }
    };

    const generator = performResetPasswordRequest({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      put({ type: RESET_PASSWORD_REQUEST + REQUEST })
    );

    expect(generator.next().value).toEqual(
      callApi(resetPasswordRequest, { data })
    );

    expect(generator.throw(resetPasswordError).value).toEqual(
      put({
        type: RESET_PASSWORD_REQUEST + FAILURE,
        payload: {
          error,
          response: resetPasswordError.response
        }
      })
    );
  });
});
