import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getId = (name) => `checkbox-${name}`;

const Checkbox = ({ name, text, className, error, ...rest }) => (
  <div>
    <label
      htmlFor={getId(name)}
      className={classNames('checkbox', className)}
    >
      <input
        name={name}
        type="checkbox"
        id={getId(name)}
        className="checkbox__input"
        {...rest}
      />

      <span className="checkbox__icon icon" />

      <span className="checkbox__text">
        {text}
      </span>
    </label>

    {
      error ? (
        <div className="main-input__error">{error}</div>
      ) : null
    }
  </div>
);

Checkbox.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  error: '',
  className: ''
};

export default Checkbox;
