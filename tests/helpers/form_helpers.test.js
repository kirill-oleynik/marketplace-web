const {
  getValue, getError, getChecked, getDifference
} = require('../../app/helpers/form_helpers');

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

describe('#getChecked', () => {
  it('returns value of event target checked', () => {
    const value = Symbol('value');
    const event = {
      target: {
        checked: value
      }
    };

    expect(
      getChecked(event)
    ).toEqual(value);
  });
});

describe('#getDifference', () => {
  const original = {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  const modified = {
    firstName: 'firstName',
    lastName: 'modified',
    email: 'email'
  };

  it('returns only modified and new values', () => {
    const expectedResult = {
      lastName: 'modified',
      email: 'email'
    };

    expect(
      getDifference(original, modified)
    ).toEqual(expectedResult);
  });
});
