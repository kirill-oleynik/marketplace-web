import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { signUp } from '../actions/current_user_actions';
import { getSignUpErrors } from '../selectors/sign_up_selectors';
import { isNotEmpty } from '../services/validations';
import LogInWithSocials from '../components/log_in_with_socials';
import SignUpForm from '../components/sign_up_form';

export class SignUpContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.initialFormState = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: ''
    };

    this.validationRules = {
      email: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', { prop: 'Email' })
        ]
      ],
      firstName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', { prop: 'First Name' })
        ]
      ],
      lastName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', { prop: 'Last Name' })
        ]
      ],
      password: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', { prop: 'Password' })
        ]
      ],
      passwordConfirmation: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', { prop: 'Password Confirmation' })
        ]
      ]
    };
  }

  handleFormSubmit = (values) => {
    this.props.signUp(values);
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
            {t('alreadyHaveAccount')}&nbsp;

            <Link href="/">
              <a className="login-form__link ml-5">
                {t('logInHere')}
              </a>
            </Link>
          </span>

          <LogInWithSocials type="button" className="w-100 mb-20" />

          <div className="d-flex align-items-center justify-content-between mb-10">
            <div className="login-form__divider divider divider--dark" />
            <span className="font-14 mr-20 ml-20">{t('or')}</span>
            <div className="login-form__divider divider divider--dark" />
          </div>
        </div>

        <SignUpForm
          validateSingle
          validateOnChange
          rules={this.validationRules}
          initialState={this.initialFormState}
          onSubmit={this.handleFormSubmit}
          errors={errors}
        />

        <p className="font-14 in-black-050 mb-20">
          {t('agree')}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: getSignUpErrors(state)
});

const mapDispatchToProps = {
  signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['signUp', 'common'])(SignUpContainer)
);
