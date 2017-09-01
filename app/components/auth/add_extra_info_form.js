import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import Revalidation from 'revalidation';
import { translate } from 'react-i18next';
import MainInput from '../../components/main_input';
import MainButton from '../../components/main_button';
import { getValue, getError } from '../../helpers/form_helpers';

export class AddExtraInfoForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    inProgress: PropTypes.bool.isRequired,
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

  handleCancelClick = () => {
    const { cancel, inProgress } = this.props;

    if (!inProgress) {
      cancel();
    }
  }

  render() {
    const {
      t,
      inProgress,
      errors: serverErrors,
      revalidation: { form: values, onChange, errors = {} }
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <MainInput
          name="organization"
          className="mb-15"
          value={values.organization}
          label={t('fields.organization')}
          onChange={flow([getValue, onChange('organization')])}
          error={getError(errors.organization, serverErrors.organization)}
        />

        <MainInput
          name="jobTitle"
          className="mb-15"
          value={values.jobTitle}
          label={t('fields.jobTitle')}
          onChange={flow([getValue, onChange('jobTitle')])}
          error={getError(errors.jobTitle, serverErrors.jobTitle)}
        />

        <MainInput
          name="phone"
          className="mb-20"
          value={values.phone}
          label={t('fields.phone')}
          onChange={flow([getValue, onChange('phone')])}
          error={getError(errors.phone, serverErrors.phone)}
        />

        <div className="login-form__info-wrap text-center">
          <MainButton
            type="submit"
            size="lg"
            color="blue"
            className="mb-20"
            disabled={inProgress}
          >
            {t('continue')}
          </MainButton>

          <span onClick={this.handleCancelClick} className="login-form__link mb-20">
            {t('later')}
          </span>
        </div>
      </form>
    );
  }
}

export default Revalidation(
  translate(['addExtraInfo'])(AddExtraInfoForm)
);
