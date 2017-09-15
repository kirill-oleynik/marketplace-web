const { put, call } = require('redux-saga/effects');
const { fetchApplication } = require('../../app/sagas/applications_saga');
const { fetchSingleApplication } = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, APPLICATION_FETCH
} = require('../../app/constants');

describe('#fetchApplication', () => {
  it('handles successful fetchSingleApplication api call', () => {
    const id = Symbol('id');
    const application = Symbol('application');
    const fetchApplicationResponse = {
      data: {
        data: application
      }
    };

    const generator = fetchApplication({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATION_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchSingleApplication, id)
    );

    expect(generator.next(fetchApplicationResponse).value).toEqual(
      put({
        type: APPLICATION_FETCH + SUCCESS,
        payload: { application }
      })
    );
  });

  it('handles failed fetchSingleApplication api call', () => {
    const id = Symbol('id');
    const error = Symbol('error');
    const fetchApplicationError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchApplication({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: APPLICATION_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchSingleApplication, id)
    );

    expect(generator.throw(fetchApplicationError).value).toEqual(
      put({
        type: APPLICATION_FETCH + FAILURE,
        payload: {
          error,
          response: fetchApplicationError.response
        }
      })
    );
  });
});
