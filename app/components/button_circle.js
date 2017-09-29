import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonCircle = ({ type, icon, size, color, className, ...rest }) => (
  <button
    type={type}
    className={classNames(
      'button-circle',
      `button-circle--${color}`,
      `button-circle--${size}`,
      className
    )}
    {...rest}
  >
    <i className={classNames('icon', `icon-${icon}`)} />
  </button>
);

ButtonCircle.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

ButtonCircle.defaultProps = {
  size: '',
  className: '',
  type: 'button'
};

export default ButtonCircle;
