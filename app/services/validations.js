import curry from 'lodash/curry';

export const isNotEmpty = (value) => value.trim().length > 0;

export const isBoolean = (value) => typeof (value) === 'boolean';

export const isNumeric = (value) => /^\d+$/.test(value);

export const isLessThan = curry(
  (length, value) => value.trim().length <= length
);

export const isEmail = (value) => /^\S+@\S+\.\S+$/.test(value);
