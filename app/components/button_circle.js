import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonCircle = ({ href, type, icon, size, color, className, ...rest }) => {
  if (href) {
    return (
      <a href={href} className={classNames('button-circle', `button-circle--${color}`, `button-circle--${size}`, className)} {...rest}>
        <i className={classNames('icon', `icon-${icon}`)} />
      </a>
    );
  }
  return (
    <button type={type} className={classNames('button-circle', `button-circle--${color}`, `button-circle--${size}`, className)} {...rest}>
      <i className={classNames('icon', `icon-${icon}`)} />
    </button>
  );
};

ButtonCircle.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string.isRequired,
  className: PropTypes.string
};

ButtonCircle.defaultProps = {
  href: '',
  className: '',
  type: 'button',
  size: ''
};

export default ButtonCircle;
