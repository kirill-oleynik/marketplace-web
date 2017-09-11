import curry from 'lodash/curry';

export const isNotEmpty = (value) => value.trim().length > 0;

export const isBoolean = (value) => typeof (value) === 'boolean';

export const isLessThan = curry(
  (length, value) => value.trim().length <= length
);

const matcher = curry((pattern, value) => pattern.test(value));

export const isNumeric = matcher(/^\d+$/);

export const isEmail = matcher(/^\S+@\S+\.\S+$/);
