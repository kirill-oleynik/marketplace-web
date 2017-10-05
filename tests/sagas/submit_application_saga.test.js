const { put } = require('redux-saga/effects');
const { callApi } = require('../../app/effects');

const {
  submitApplicationCandidate
} = require('../../app/sagas/submit_application_saga');

const { submitApplication } = require('../../app/services/api');

const {
  SUCCESS, FAILURE, SUBMIT_APPLICATION, NOTIFICATION_SHOW
} = require('../../app/constants');

describe('#submitApplicationCandidate', () => {
  it('handles successful submitApplication api call', () => {
    const data = Symbol('data');
    const applicationCandidate = Symbol('applicationCandidate');
    const submitApplicationResponse = {
      data: {
        data: applicationCandidate
      }
    };

    const generator = submitApplicationCandidate({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(submitApplication, { data })
    );

    expect(generator.next(submitApplicationResponse).value).toEqual(
      put({
        type: SUBMIT_APPLICATION + SUCCESS,
        payload: { applicationCandidate }
      })
    );

    expect(generator.next().value).toEqual(
      put({
        type: NOTIFICATION_SHOW,
        payload: {
          event: 'application:submit'
        }
      })
    );
  });

  it('handles failed submitApplication api call', () => {
    const data = Symbol('data');
    const error = Symbol('error');
    const submitApplicationError = {
      response: {
        data: { error }
      }
    };

    const generator = submitApplicationCandidate({
      payload: { data }
    });

    expect(generator.next().value).toEqual(
      callApi(submitApplication, { data })
    );

    expect(generator.throw(submitApplicationError).value).toEqual(
      put({
        type: SUBMIT_APPLICATION + FAILURE,
        payload: {
          error,
          response: submitApplicationError.response
        }
      })
    );
  });
});
