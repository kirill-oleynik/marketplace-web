import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Rating = ({ className }) => (
  <div className={classNames('rating', className)}>
    <div className="rating__stars rating__stars-4 mr-15">
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
      <i className="rating__stars-item icon icon-star" />
    </div>
    <span className="align-middle">
      4.2
      <span className="in-black-050">(2560 votes)</span>
    </span>
  </div>
);

Rating.propTypes = {
  className: PropTypes.string
};

Rating.defaultProps = {
  className: ''
};

export default Rating;
