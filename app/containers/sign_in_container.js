import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Link from 'next/link';
import { signUp } from '../routes';
import { signIn } from '../actions/auth_actions';
import { getSignInErrors } from '../selectors/sign_in_selectors';
import { isNotEmpty, isBoolean } from '../services/validations';
import LogInWithSocials from './../components/auth/log_in_with_socials';
import SignInForm from '../components/auth/sign_in_form';
import AuthTypesDivider from '../components/auth/auth_types_divider';

export class SignInContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
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
    this.props.signIn(values);
  }

  render() {
    const { t, errors } = this.props;

    return (
      <div>
        <div className="mb-15">
          <h2 className="login-form__title">
            {t('title')}
          </h2>

          <span className="d-inline-block font-14 mb-10">
            {t('newToAppreview')}

            <Link href={signUp}>
              <p className="login-form__link ml-5">
                {t('createAccount')}
              </p>
            </Link>
          </span>

          <LogInWithSocials
            type="button"
            className="w-100 mb-20"
          />

          <AuthTypesDivider
            dividerText={t('or')}
          />
        </div>

        <SignInForm
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
  errors: getSignInErrors(state)
});

const mapDispatchToProps = {
  signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['signIn', 'common'])(SignInContainer)
);
