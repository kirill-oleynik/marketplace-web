import {
  isNotEmpty, isBoolean, isLessThan, isMoreThan, isNumeric, isEmail, isUrl
} from '../../app/services/validations';

describe('#isNotEmpty', () => {
  it('returns true if string has more than 0 characters', () => {
    expect(isNotEmpty('test')).toEqual(true);
  });

  it('returns false if string has 0 characters', () => {
    expect(isNotEmpty('')).toEqual(false);
  });
});

describe('#isBoolean', () => {
  it('returns true if given value is not bool', () => {
    expect(isBoolean('string')).toEqual(false);
  });

  it('returns true if given value is bool', () => {
    expect(isBoolean(true)).toEqual(true);
  });

  it('returns true if given value is bool', () => {
    expect(isBoolean(false)).toEqual(true);
  });
});

describe('#isLessThan', () => {
  it('returns false if given string has less characters', () => {
    expect(isLessThan(2)('test')).toEqual(false);
  });

  it('returns true if given string has more characters', () => {
    expect(isLessThan(6)('test')).toEqual(true);
  });
});

describe('#isMoreThan', () => {
  it('returns true if given string has more characters', () => {
    expect(isMoreThan(2)('test')).toEqual(true);
  });

  it('returns false if given string has less characters', () => {
    expect(isMoreThan(6)('test')).toEqual(false);
  });
});

describe('#isNumeric', () => {
  it('returns true if test value is a number', () => {
    expect(isNumeric(2)).toEqual(true);
  });

  it('returns true if test value is a string with number', () => {
    expect(isNumeric('6')).toEqual(true);
  });

  it('returns false if test value is not a number', () => {
    expect(isNumeric('test')).toEqual(false);
  });
});

describe('#isEmail', () => {
  it('returns true if test value matches email format', () => {
    expect(isEmail('example@email.com')).toEqual(true);
  });

  it('returns false if test value does not match email format', () => {
    expect(isEmail('$%^*example@email.com')).toEqual(false);
  });

  it('returns false if test value does not match email format', () => {
    expect(isEmail('example@emailemailemail.comcomcom')).toEqual(false);
  });

  it('returns false if test value does not match email format', () => {
    expect(isEmail('email')).toEqual(false);
  });
});

describe('#isUrl', () => {
  it('returns true if test value matches url format', () => {
    expect(isUrl('website.com')).toEqual(true);
  });

  it('returns true if test value matches url format', () => {
    expect(isUrl('www.website.com')).toEqual(true);
  });

  it('returns true if test value matches url format', () => {
    expect(isUrl('http://www.website.com')).toEqual(true);
  });

  it('returns true if test value matches url format', () => {
    expect(isUrl('http://www.website.com/path')).toEqual(true);
  });

  it('returns true if test value matches url format', () => {
    expect(isUrl('https://www.website.com/path')).toEqual(true);
  });

  it('returns true if test value matches url format', () => {
    expect(isUrl('localhost:3000/path')).toEqual(false);
  });

  it('returns false if test value does not match url format', () => {
    expect(isUrl('invalid')).toEqual(false);
  });
});
