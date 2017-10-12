import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';

export const SubmitReview = ({ t, review, onSubmit }) => (
  <div className="application__submit-review">
    <p className="font-16 font-700 mb-20">
      {t('appProfile.ratings.submit')}
    </p>

    <div
      className={classNames(
        'rating__stars',
        `rating__stars-${review.value}`,
        { 'rating__stars-open': !review.value }
      )}
    >
      {
        [1, 2, 3, 4, 5].map((reviewValue) => (
          <i
            key={reviewValue}
            className="rating__stars-item icon icon-star"
            onClick={() => onSubmit(reviewValue)}
          />
        ))
      }
    </div>
  </div>
);

SubmitReview.propTypes = {
  review: PropTypes.object,
  t: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

SubmitReview.defaultProps = {
  review: {
    value: 0
  }
};

export default translate(['applications'])(SubmitReview);
