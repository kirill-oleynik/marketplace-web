const { getValue, getError } = require('../../app/helpers/form_helpers');

describe('#getValue', () => {
  it('returns value of event target', () => {
    const value = Symbol('value');
    const event = {
      target: { value }
    };

    expect(
      getValue(event)
    ).toEqual(value);
  });
});

describe('#getError', () => {
  it('returns first client error, when it present', () => {
    const firstError = Symbol('firstError');
    const secondError = Symbol('secondError');

    expect(
      getError([firstError, secondError], [secondError])
    ).toEqual(firstError);
  });

  it('returns first server error, when it present', () => {
    const firstError = Symbol('firstError');
    const secondError = Symbol('secondError');

    expect(
      getError([], [firstError, secondError])
    ).toEqual(firstError);
  });

  it('returns undefined, when all errors empty', () => {
    expect(
      getError([], [])
    ).toEqual(undefined);
  });
});
