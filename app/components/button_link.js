import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonLink = ({ href, text, type, className, ...rest }) => {
  if (href) {
    return (
      <a href={href} className={classNames('button-link', className)} {...rest}>{text}</a>
    );
  }

  return (
    <button type={type} className={classNames('button-link', className)} {...rest}>{text}</button>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string
};

ButtonLink.defaultProps = {
  href: '',
  type: 'button',
  className: ''
};

export default ButtonLink;
