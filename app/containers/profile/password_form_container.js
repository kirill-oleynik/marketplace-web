import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import PasswordForm from '../../components/profile/password_form';
import { isNotEmpty, isLessThan } from '../../services/validations';
import { getProfileErrors } from '../../selectors/profile_selectors';
import { updatePassword } from '../../actions/profile_actions';

export class PasswordFormContainer extends Component {
  static propTypes = {
    updatePassword: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.initialFormState = {
      currentPassword: '',
      password: '',
      passwordConfirmation: ''
    };

    this.validationRules = {
      currentPassword: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('common:profile.passwordTab.fields.currentPassword')
          })
        ]
      ],
      password: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('common:profile.passwordTab.fields.password')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('common:profile.passwordTab.fields.password')
          })
        ]
      ],
      passwordConfirmation: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('common:profile.passwordTab.fields.passwordConfirmation')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('common:profile.passwordTab.fields.passwordConfirmation')
          })
        ]
      ]
    };
  }

  handleFormSubmit = (values) => {
    this.props.updatePassword(values);
  }

  render() {
    return (
      <PasswordForm
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


const mapStateToProps = (state) => ({
  errors: getProfileErrors(state)
});

const mapDispatchToProps = {
  updatePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['common'])(PasswordFormContainer)
);
