import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { isNotEmpty, isLessThan } from '../../services/validations';
import { resetPasswordConfirm } from '../../actions/reset_password_actions';
import { signIn } from '../../routes';

import ResetPasswordConfirmForm
  from '../../components/reset_password/confirm_form';

import {
  getResetPasswordConfirmErrors
} from '../../selectors/reset_password_selectors';

class ResetPasswordConfirmContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleFormCancel: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    resetPasswordConfirm: PropTypes.func.isRequired,
    requestParams: PropTypes.object.isRequired
  }

  initialFormState = {
    password: '',
    passwordConfirmation: ''
  }

  validationRules = {
    password: [
      [
        isNotEmpty,
        this.props.t('common:validations.isNotEmpty', {
          prop: this.props.t('resetPassword:confirmForm.fields.password')
        })
      ],
      [
        isLessThan(30),
        this.props.t('common:validations.isLessThan', {
          count: 30,
          prop: this.props.t('resetPassword:confirmForm.fields.password')
        })
      ]
    ],
    passwordConfirmation: [
      [
        isNotEmpty,
        this.props.t('common:validations.isNotEmpty', {
          prop: this.props.t('resetPassword:confirmForm.fields.passwordConfirmation')
        })
      ],
      [
        isLessThan(30),
        this.props.t('common:validations.isLessThan', {
          count: 30,
          prop: this.props.t('resetPassword:confirmForm.fields.passwordConfirmation')
        })
      ]
    ]
  }

  dataToSubmit = (formData) => (
    Object.assign({}, formData, {
      recoveryToken: this.props.requestParams.recoveryToken
    })
  )

  handleFormSubmit = (formData) => {
    this.props.resetPasswordConfirm(this.dataToSubmit(formData));
  }

  render() {
    return (
      <ResetPasswordConfirmForm
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

const handleFormCancel = (event) => {
  event.preventDefault();
  event.stopPropagation();
  Router.push(signIn);
};

const mapStateToProps = (state) => ({
  errors: getResetPasswordConfirmErrors(state)
});

const mapDispatchToProps = {
  handleFormCancel,
  resetPasswordConfirm
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['resetPassword', 'common'])(ResetPasswordConfirmContainer)
);
