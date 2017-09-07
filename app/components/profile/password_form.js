import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Revalidation from 'revalidation';
import flow from 'lodash/flow';
import MainInput from '../main_input';
import MainButton from '../main_button';
import { getValue, getError } from '../../helpers/form_helpers';

class PasswordForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    revalidation: PropTypes.object.isRequired
  };

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

  render() {
    const {
      t,
      errors: serverErrors,
      revalidation: { form: values, onChange, errors = {} }
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-20">
          <MainInput
            className="mb-10"
            type="password"
            name="current-password"
            value={values.currentPassword}
            onChange={flow([getValue, onChange('currentPassword')])}
            label={t('common:profile.passwordTab.fields.currentPassword')}
            error={getError(errors.currentPassword, serverErrors.currentPassword)}
          />

          <MainInput
            className="mb-10"
            type="password"
            name="password"
            value={values.password}
            onChange={flow([getValue, onChange('password')])}
            label={t('common:profile.passwordTab.fields.password')}
            error={getError(errors.password, serverErrors.password)}
          />

          <MainInput
            className="mb-10"
            type="password"
            name="password-confirmation"
            value={values.passwordConfirmation}
            onChange={flow([getValue, onChange('passwordConfirmation')])}
            label={t('common:profile.passwordTab.fields.passwordConfirmation')}
            error={getError(errors.passwordConfirmation, serverErrors.passwordConfirmation)}
          />
        </div>

        <MainButton
          type="submit"
          color="blue"
          size="lg"
          className="w-100 mb-20"
        >
          {t('common:profile.passwordTab.submit')}
        </MainButton>
      </form>
    );
  }
}

export default Revalidation(PasswordForm);
