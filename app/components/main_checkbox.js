import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainCheckbox = ({ name, text, className }) => (
  <label className={classNames('main-checkbox', className)} htmlFor={name}>
    <input type="checkbox" className="main-checkbox__input" name={name} />
    <span className="main-checkbox__icon icon" />
    <span className="main-checkbox__text">{text}</span>
  </label>
);

MainCheckbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

MainCheckbox.defaultProps = {
  className: ''
};

export default MainCheckbox;
