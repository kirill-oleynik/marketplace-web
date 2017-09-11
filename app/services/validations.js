import curry from 'lodash/curry';
import every from 'lodash/every';

const matcher = curry((pattern, value) => pattern.test(value));

const collectionValidator = curry(
  (rule, collection) => every(collection, rule)
);

export const isNotEmpty = (value) => value.trim().length > 0;

export const isBoolean = (value) => typeof (value) === 'boolean';

export const isLessThan = curry(
  (length, value) => value.trim().length <= length
);

export const isNumeric = matcher(/^\d+$/);

export const isEmail = matcher(/^\S+@\S+\.\S+$/);

export const collectionIsNotEmpty = collectionValidator(isNotEmpty);
