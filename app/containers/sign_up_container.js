import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { signIn } from '../routes';
import { signUp } from '../actions/auth_actions';
import { getSignUpErrors } from '../selectors/sign_up_selectors';
import { isNotEmpty } from '../services/validations';
import LogInWithLinkedin from '../components/auth/log_in_with_linkedin';
import SignUpForm from '../components/auth/sign_up_form';
import AuthTypesDivider from '../components/auth/auth_types_divider';

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
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.email')
          })
        ]
      ],
      firstName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.firstName')
          })
        ]
      ],
      lastName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.lastName')
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
      passwordConfirmation: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.passwordConfirmation')
          })
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

            <Link href={signIn}>
              <a className="login-form__link ml-5">
                {t('logInHere')}
              </a>
            </Link>
          </span>

          <LogInWithLinkedin
            className="w-100 mb-20"
          />

          <AuthTypesDivider dividerText={t('or')} />
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
