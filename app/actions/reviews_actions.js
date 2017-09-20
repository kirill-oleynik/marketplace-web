import {
  REVIEW_CREATE
} from '../constants';

export const createReview = (data) => ({
  type: REVIEW_CREATE,
  payload: { data }
});
