import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Revalidation from 'revalidation';
import { translate } from 'react-i18next';
import flow from 'lodash/flow';
import first from 'lodash/first';
import some from 'lodash/some';
import MainInput from './../components/main_input';
import MainButton from './../components/main_button';
import MainCheckbox from './../components/main_checkbox';

const getError = (clientError = [], serverError = []) => (
  first(clientError) || first(serverError)
);
const getValue = (event) => event.target.value;

export class LogInForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    revalidation: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.handleRememberMeClick = this.handleRememberMeClick.bind(this);
  }

  state = {
    passwordShown: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const {
      onSubmit: onSubmitCb,
      revalidation: { onSubmit }
    } = this.props;

    onSubmit(({ form, valid }) => {
      if (!valid) {
        return;
      }

      onSubmitCb(form);
    });
  }

  handlePasswordIconClick = () => {
    this.setState({
      passwordShown: !this.state.passwordShown
    });
  }

  handlePasswordIconClick() {
    this.setState({
      passwordShown: !this.state.passwordShown
    });
  }

  handleRememberMeClick() {
    const { revalidation: { form: values, onChange } } = this.props;
    return onChange('rememberMe', !values.rememberMe);
  }

  render() {
    const { passwordShown } = this.state;

    const {
      t,
      errors: serverErrors,
      revalidation: { form: values, onChange, errors = {} }
    } = this.props;

    return (
      <form
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <MainInput
          name="email"
          label={t('fields.email')}
          className="mb-15"
          value={values.email}
          onChange={flow([getValue, onChange('email')])}
          error={getError(errors.email, serverErrors.email)}
        />

        <MainInput
          name="password"
          label={t('fields.password')}
          icon={passwordShown ? 'eye-cross' : 'eye'}
          className="mb-20"
          value={values.password}
          onChange={flow([getValue, onChange('password')])}
          error={getError(errors.password, serverErrors.password)}
          type={passwordShown ? 'text' : 'password'}
          onIconClick={this.handlePasswordIconClick}
        />

        {
          some(serverErrors.authentication) && (
            <div className="">
              <p className="">
                {t('badCredentials')}
              </p>
            </div>
          )
        }

        <MainButton
          size="lg"
          color="blue"
          className="disabled w-100 mb-20"
          type="submit"
        >
          {t('submit')}
        </MainButton>

        <div className="login-form__info-wrap mb-20">
          <a href="/" className="login-form__link mb-20">
            {t('forgotPassword')}
          </a>

          <MainCheckbox
            name="keep me logged in"
            text={t('rememberMe')}
            className="mb-20"
            value={values.rememberMe}
            onClick={this.handleRememberMeClick}
            error={getError(errors.rememberMe, serverErrors.rememberMe)}
          />
        </div>

      </form>
    );
  }
}

export default Revalidation(
  translate(['logIn'])(LogInForm)
);
