const {
  getResponseData, getResponseError
} = require('../../app/helpers/response_helpers');

describe('#getResponseData', () => {
  it('returns data of response data', () => {
    const data = Symbol('data');
    const response = {
      data: { data }
    };

    expect(
      getResponseData(response)
    ).toEqual(data);
  });
});

describe('#getResponseError', () => {
  it('returns error of exception response data', () => {
    const error = Symbol('error');
    const exception = {
      response: {
        data: { error }
      }
    };

    expect(
      getResponseError(exception)
    ).toEqual({
      error,
      response: exception.response
    });
  });
});
