import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainCheckbox = ({ name, text, className, value, error, onClick }) => (
  <div>
    <label
      className={classNames('main-checkbox', className)}
      htmlFor={name}
    >
      <input
        type="checkbox"
        className="main-checkbox__input"
        name={name}
        checked={value}
      />

      <span
        className="main-checkbox__icon icon"
        onClick={onClick}
      />

      <span className="main-checkbox__text">
        {text}
      </span>
    </label>

    { error && <div className="main-input__error">{error}</div> }
  </div>
);

MainCheckbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

MainCheckbox.defaultProps = {
  className: '',
  name: '',
  text: '',
  value: false,
  error: '',
  onClick: () => {}
};

export default MainCheckbox;
