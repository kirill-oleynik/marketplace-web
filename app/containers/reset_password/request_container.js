import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { isNotEmpty, isEmail } from '../../services/validations';
import { resetPasswordRequest } from '../../actions/reset_password_actions';
import { signIn } from '../../routes';

import ResetPasswordRequestForm
  from '../../components/reset_password/request_form';

import {
  getResetPasswordRequestErrors
} from '../../selectors/reset_password_selectors';

class ResetPasswordRequestContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleFormCancel: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    resetPasswordRequest: PropTypes.func.isRequired
  }

  initialFormState = {
    email: ''
  }

  validationRules = {
    email: [
      [
        isNotEmpty,
        this.props.t('common:validations.isNotEmpty', {
          prop: this.props.t('resetPassword:requestForm.fields.email')
        })
      ],
      [
        isEmail,
        this.props.t('common:validations.isEmail', {
          prop: this.props.t('resetPassword:requestForm.fields.email')
        })
      ]
    ]
  };

  handleFormSubmit = (data) => {
    this.props.resetPasswordRequest(data);
  }

  render() {
    return (
      <ResetPasswordRequestForm
        validateSingle
        validateOnChange
        rules={this.validationRules}
        initialState={this.initialFormState}
        onSubmit={this.handleFormSubmit}
        {...this.props}
      />
    );
  }
}

const handleFormCancel = () => Router.push(signIn);

const mapStateToProps = (state) => ({
  errors: getResetPasswordRequestErrors(state)
});

const mapDispatchToProps = {
  handleFormCancel,
  resetPasswordRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['resetPassword', 'common'])(ResetPasswordRequestContainer)
);
