import curry from 'lodash/curry';
import flow from 'lodash/flow';
import sum from 'lodash/sum';
import { asPercentage } from './text_helpers';

// toFloat :: Number -> Integer -> String
const toFloat = curry((precision, number) => (number).toFixed(precision));

// sumOfValues :: Object -> Number
const sumOfValues = flow([
  Object.values,
  sum
]);

// collectionShare :: (Object, Integer) -> Float
const collectionShare = (object, index) => object[index] / sumOfValues(object);

// averageRating :: Integer -> String
export const averageRating = toFloat(1);
export const roundedRating = toFloat(0);

// votePercentage :: (Object, Integer) -> String
export const votePercentage = (votesCollection, voteIndex) => (
  asPercentage(collectionShare(votesCollection, voteIndex) * 100)
);
