import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Revalidation from 'revalidation';
import MainInput from './../main_input';
import MainButton from './../main_button';
import { getValue, getError } from '../../helpers/form_helpers';

class ResetPasswordConfirForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleFormCancel: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    revalidation: PropTypes.object.isRequired
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

  render() {
    const {
      t, handleFormCancel,
      errors: serverErrors,
      revalidation: {
        form: values, onChange, errors = {}
      }
    } = this.props;

    const { passwordShown } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="login-form"
      >
        <div className="mb-20">
          <h2 className="login-form__title">
            {t('confirmForm.title')}
          </h2>

          <p className="font-14 mb-10">
            {t('confirmForm.instructions')}
          </p>
        </div>

        <MainInput
          className="mb-20"
          name="password"
          type={passwordShown ? 'text' : 'password'}
          icon={passwordShown ? 'eye-cross' : 'eye'}
          label={t('confirmForm.fields.password')}
          value={values.password}
          onChange={flow([getValue, onChange('password')])}
          error={getError(errors.password, serverErrors.password)}
          onIconClick={this.handlePasswordIconClick}
        />

        <MainInput
          className="mb-20"
          name="passwordConfirmation"
          type={passwordShown ? 'text' : 'password'}
          label={t('confirmForm.fields.passwordConfirmation')}
          value={values.passwordConfirmation}
          onChange={flow([getValue, onChange('passwordConfirmation')])}
          error={getError(errors.passwordConfirmation, serverErrors.passwordConfirmation)}
        />

        <div className="login-form__info-wrap text-center mb-20">
          <MainButton
            type="submit"
            size="lg"
            color="blue"
            className="mb-20"
          >
            {t('confirmForm.submit')}
          </MainButton>

          <button
            onClick={handleFormCancel}
            className="login-form__link mb-20"
          >
            {t('confirmForm.cancel')}
          </button>
        </div>
      </form>
    );
  }
}

export default Revalidation(ResetPasswordConfirForm);
