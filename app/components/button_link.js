import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({ href, text, type, ...rest }) => {
  if (href) {
    return (
      <a href={href} className="button-link" {...rest}>{text}</a>
    );
  }
  return (
    <button type={type} className="button-link" {...rest}>{text}</button>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

ButtonLink.defaultProps = {
  href: '',
  type: 'button'
};

export default ButtonLink;
