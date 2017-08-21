import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainInput = ({
  name, value, label, error, type, icon, onIconClick, className, ...rest
}) => (
  <div
    className={
      classNames(
        'main-input',
        className,
        { 'is-invalid': !!error },
        { 'with-icon': !!icon }
      )
    }
  >
    <div className="main-input__field-box">
      {
        icon ? (
          <i
            onClick={onIconClick}
            className={classNames(`main-input__icon icon icon-${icon}`)}
          />
        ) : null
      }

      <input
        type={type}
        name={name}
        value={value}
        className={classNames('main-input__field', { 'has-text': !!value.length })}
        {...rest}
      />

      <label htmlFor={name} className="main-input__label">{label}</label>
    </div>

    {
      error ? (
        <div className="main-input__error">{error}</div>
      ) : null
    }
  </div>
);

MainInput.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onIconClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

MainInput.defaultProps = {
  icon: '',
  error: '',
  value: '',
  className: '',
  type: 'text',
  onIconClick: () => {}
};

export default MainInput;
