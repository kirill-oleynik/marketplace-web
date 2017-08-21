import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Textarea from 'react-textarea-autosize';

const MainTextarea = ({ name, label, hint, className }) => (
  <div className={classNames('main-input', className)}>
    <div className="main-input__field-box">
      <Textarea name={name} className="main-input__field main-input__field--textarea" />
      <label htmlFor={name} className="main-input__label">{label}</label>
    </div>
    <div className="main-input__hint">{hint}</div>
  </div>
);

MainTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  className: PropTypes.string
};

MainTextarea.defaultProps = {
  className: ''
};

export default MainTextarea;
