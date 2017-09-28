import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Revalidation from 'revalidation';
import MainInput from './../main_input';
import MainButton from './../main_button';
import { getValue, getError } from '../../helpers/form_helpers';

class ResetPasswordRequestForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleFormCancel: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    revalidation: PropTypes.object.isRequired
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

  render() {
    const {
      t, handleFormCancel,
      errors: serverErrors,
      revalidation: {
        form: values, onChange, errors = {}
      }
    } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="login-form"
      >
        <div className="mb-20">
          <h2 className="login-form__title">
            {t('requestForm.title')}
          </h2>

          <p className="font-14 mb-10">
            {t('requestForm.instructions')}
          </p>
        </div>

        <MainInput
          className="mb-20"
          name="email"
          label={t('requestForm.fields.email')}
          value={values.email}
          onChange={flow([getValue, onChange('email')])}
          error={getError(errors.email, serverErrors.email)}
        />

        <div className="login-form__info-wrap text-center mb-20">
          <MainButton
            type="submit"
            size="lg"
            color="blue"
            className="mb-20"
          >
            {t('requestForm.submit')}
          </MainButton>

          <button
            onClick={handleFormCancel}
            className="login-form__link mb-20"
          >
            {t('requestForm.cancel')}
          </button>
        </div>
      </form>
    );
  }
}

export default Revalidation(ResetPasswordRequestForm);
