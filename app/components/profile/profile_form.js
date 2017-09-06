import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Revalidation from 'revalidation';
import flow from 'lodash/flow';
import MainInput from '../main_input';
import MainButton from '../main_button';
import { getValue, getError } from '../../helpers/form_helpers';

class ProfileForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    revalidation: PropTypes.object.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    needPasswordConfirmation: PropTypes.bool.isRequired
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
      onEmailChange,
      needPasswordConfirmation,
      errors: serverErrors,
      revalidation: { form: values, onChange, errors = {} }
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-20">
          <Row>
            <Col xs="12" sm="6">
              <MainInput
                name="name"
                value={values.firstName}
                label={t('profileTab.firstName')}
                onChange={flow([getValue, onChange('firstName')])}
                error={getError(errors.firstName, serverErrors.firstName)}
                className="mb-10"
              />
            </Col>

            <Col xs="12" sm="6">
              <MainInput
                name="name"
                value={values.lastName}
                label={t('profileTab.lastName')}
                onChange={flow([getValue, onChange('lastName')])}
                error={getError(errors.lastName, serverErrors.lastName)}
                className="mb-10"
              />
            </Col>
          </Row>

          <MainInput
            type="email"
            name="email"
            value={values.email}
            label={t('profileTab.email')}
            onChange={flow([onEmailChange, getValue, onChange('email')])}
            error={getError(errors.email, serverErrors.email)}
            className="mb-10"
          />

          { needPasswordConfirmation ? (
            <MainInput
              type="password"
              name="password"
              value={values.password}
              label={t('profileTab.passwordLabel')}
              onChange={flow([getValue, onChange('password')])}
              error={getError(errors.password, serverErrors.password)}
              className="mb-10"
            />
          ) : null }

          <MainInput
            name="organization"
            value={values.organization}
            label={t('profileTab.organization')}
            onChange={flow([getValue, onChange('organization')])}
            error={getError(errors.organization, serverErrors.organization)}
            className="mb-10"
          />

          <MainInput
            name="job"
            value={values.jobTitle}
            label={t('profileTab.jobTitle')}
            onChange={flow([getValue, onChange('jobTitle')])}
            error={getError(errors.jobTitle, serverErrors.jobTitle)}
            className="mb-10"
          />

          <MainInput
            name="phone"
            value={values.phone}
            label={t('profileTab.phone')}
            onChange={flow([getValue, onChange('phone')])}
            error={getError(errors.phone, serverErrors.phone)}
            className="mb-10"
          />
        </div>

        <MainButton
          type="submit"
          color="blue"
          size="lg"
          className="w-100 mb-20"
        >
          {t('profileTab.submit')}
        </MainButton>
      </form>
    );
  }
}

export default Revalidation(ProfileForm);
