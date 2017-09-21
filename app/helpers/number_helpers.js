import curry from 'lodash/curry';
import flow from 'lodash/flow';
import sum from 'lodash/sum';
import values from 'lodash/values';
import multiply from 'lodash/multiply';
import { asPercentage } from './text_helpers';

// _cMultiply :: Number -> Number -> Number
const _cMultiply = curry(multiply);

// _toFloat :: Number -> Integer -> Float
const _toFloat = curry((precision, number) => (
  parseFloat((number).toFixed(precision))
));

// _collectionShare :: (Object, Integer) -> (Number || NaN || Infinity)
const _collectionShare = (object, index) => (
  object[index] / sum(values(object))
);

// _rescueZeroDivision :: (NaN || Infinity || Number) -> Number
const _rescueZeroDivision = (value) => (
  isFinite(value) ? value : 0
);

// averageRating :: Integer -> String
export const averageRating = _toFloat(1);
export const roundedRating = _toFloat(0);

// votePercentage :: (Object, Integer) -> String
export const votePercentage = flow([
  _collectionShare,
  _rescueZeroDivision,
  _cMultiply(100),
  asPercentage
]);
