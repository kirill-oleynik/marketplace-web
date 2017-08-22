import React from 'react';
import PropTypes from 'prop-types';

const authTypesDivider = ({ dividerText }) => (
  <div className="d-flex align-items-center justify-content-between mb-10">
    <div className="login-form__divider divider divider--dark" />

    <span className="font-14 mr-20 ml-20">
      { dividerText }
    </span>

    <div className="login-form__divider divider divider--dark" />
  </div>
);

authTypesDivider.propTypes = {
  dividerText: PropTypes.string
};

authTypesDivider.defaultProps = {
  dividerText: ''
};

export default authTypesDivider;
