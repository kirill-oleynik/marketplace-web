import {
  REVIEW_CREATE,
  REVIEW_DELETE
} from '../constants';

export const createReview = (data) => ({
  type: REVIEW_CREATE,
  payload: { data }
});

export const deleteReview = (review, application) => ({
  type: REVIEW_DELETE,
  payload: {
    reviewId: review.id,
    applicationSlug: application.slug
  }
});
