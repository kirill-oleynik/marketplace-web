import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import pick from 'lodash/pick';
import Revalidation from 'revalidation';
import { translate } from 'react-i18next';
import MainInput from './../main_input';
import MainButton from './../main_button';
import { getValue, getError } from '../../helpers/form_helpers';
import { collectionIsNotEmpty } from '../../services/validations';

export class SignUpForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
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
    const { passwordShown } = this.state;

    const {
      t,
      errors: serverErrors,
      revalidation: { form: values, onChange, errors = {} }
    } = this.props;

    const requiredFields = pick(values, [
      'email', 'firstName', 'lastName', 'password', 'passwordConfirmation'
    ]);
    const submitIsActive = collectionIsNotEmpty(requiredFields);

    return (
      <form onSubmit={this.handleSubmit}>
        <MainInput
          name="email"
          className="mb-15"
          value={values.email}
          label={t('fields.email')}
          onChange={flow([getValue, onChange('email')])}
          error={getError(errors.email, serverErrors.email)}
        />

        <div className="d-flex">
          <MainInput
            name="firstName"
            className="mb-15 mr-20"
            value={values.firstName}
            label={t('fields.firstName')}
            onChange={flow([getValue, onChange('firstName')])}
            error={getError(errors.firstName, serverErrors.firstName)}
          />

          <MainInput
            name="lastName"
            className="mb-15"
            value={values.lastName}
            label={t('fields.lastName')}
            onChange={flow([getValue, onChange('lastName')])}
            error={getError(errors.lastName, serverErrors.lastName)}
          />
        </div>

        <MainInput
          icon={passwordShown ? 'eye-cross' : 'eye'}
          name="password"
          className="mb-20"
          value={values.password}
          label={t('fields.password')}
          onIconClick={this.handlePasswordIconClick}
          type={passwordShown ? 'text' : 'password'}
          onChange={flow([getValue, onChange('password')])}
          error={getError(errors.password, serverErrors.password)}
        />

        <MainInput
          className="mb-20"
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          label={t('fields.passwordConfirmation')}
          type={passwordShown ? 'text' : 'password'}
          onChange={flow([getValue, onChange('passwordConfirmation')])}
          error={getError(
            errors.passwordConfirmation, serverErrors.passwordConfirmation
          )}
        />

        <MainButton
          disabled={!submitIsActive}
          size="lg"
          color="blue"
          type="submit"
          className="w-100 mb-10"
        >
          {t('submit')}
        </MainButton>
      </form>
    );
  }
}

export default Revalidation(
  translate(['signUp'])(SignUpForm)
);
