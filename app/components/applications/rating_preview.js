import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { roundedRating, averageRating } from '../../helpers/number_helpers';

export const RatingPreview = ({ t, total, average, className }) => (
  <div className={classNames('rating', className)}>
    <div
      className={`rating__stars rating__stars-${roundedRating(average)} mr-15`}
    >
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
    </div>

    <span className="align-middle">
      {averageRating(average)}

      <span className="in-black-050">
        {t('appProfile.ratings.totalVotes', { value: total })}
      </span>
    </span>
  </div>
);

RatingPreview.propTypes = {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired
};

RatingPreview.defaultProps = {
  className: 'mb-30'
};

export default RatingPreview;
