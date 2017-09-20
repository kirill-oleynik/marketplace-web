import React from 'react';
import PropTypes from 'prop-types';

export const SubmitReview = ({ t, value, onSubmit }) => (
  <div>
    <p className="font-16 font-700 mb-20">
      {t('appProfile.ratings.submit')}
    </p>

    <div className={`rating__stars rating__stars-${value}`}>
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
  t: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SubmitReview;
