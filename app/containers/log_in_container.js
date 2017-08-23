import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { logIn } from '../actions/current_user_actions';
import { getLogInErrors } from '../selectors/log_in_selectors';
import { isNotEmpty, isBoolean } from '../services/validations';
import LogInWithSocials from './../components/auth/log_in_with_socials';
import LogInForm from '../components/auth/log_in_form';
import AuthTypesDivider from '../components/auth/auth_types_divider';

export class LogInContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.initialFormState = {
      email: '',
      password: '',
      rememberMe: false
    };

    this.validationRules = {
      email: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.email')
          })
        ]
      ],
      password: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.password')
          })
        ]
      ],
      rememberMe: [
        [
          isBoolean,
          props.t('common:validations.isBoolean', {
            prop: props.t('fields.rememberMe')
          })
        ]
      ]
    };
  }

  handleFormSubmit = (values) => {
    this.props.logIn(values);
  }

  render() {
    const { t, errors } = this.props;

    return (
      <div>
        <div className="mb-15">
          <h2 className="login-form__title">
            { t('title') }
          </h2>

          <span className="d-inline-block font-14 mb-10">
            { t('newToAppreview') }

            <a
              href="/"
              className="login-form__link ml-5"
            >
              { t('createAccount') }
            </a>
          </span>

          <LogInWithSocials
            type="button"
            className="w-100 mb-20"
          />

          <AuthTypesDivider
            dividerText={t('or')}
          />
        </div>

        <LogInForm
          validateSingle
          validateOnChange
          rules={this.validationRules}
          initialState={this.initialFormState}
          errors={errors}
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: getLogInErrors(state)
});

const mapDispatchToProps = {
  logIn
};


export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['logIn', 'common'])(LogInContainer)
);
