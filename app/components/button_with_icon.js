import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonWithIcon = ({ text, icon, type, className, ...rest }) => (
  <button type={type} className={`btn-with-icon ${className}`} {...rest}>
    <span className="btn-with-icon__text">
      {text}
    </span>

    <i
      className={classNames(
        'icon',
        `icon-${icon}`,
        'btn-with-icon__icon'
      )}
    />
  </button>
);

ButtonWithIcon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

ButtonWithIcon.defaultProps = {
  className: '',
  type: 'button'
};

export default ButtonWithIcon;
