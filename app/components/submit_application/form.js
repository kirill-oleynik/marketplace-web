import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Revalidation from 'revalidation';
import flow from 'lodash/flow';
import MainButton from '../main_button';
import MainInput from '../main_input';
import ButtonLink from '../button_link';
import { getValue, getError } from '../../helpers/form_helpers';

export class SubmitApplicationForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
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
      t, closeModal,
      errors: serverErrors,
      revalidation: {
        form: values, onChange, errors = {}
      }
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <p className="font-24 font-700">
          {t('submitAppilcation.title')}
        </p>

        <div className="mb-20">
          <MainInput
            name="url"
            value={values.url}
            label={t('submitAppilcation.fields.url')}
            onChange={flow([getValue, onChange('url')])}
            error={getError(errors.url, serverErrors.url)}
            className="mb-10"
          />

          <MainInput
            type="text"
            name="description"
            value={values.description}
            label={t('submitAppilcation.fields.description')}
            onChange={flow([getValue, onChange('description')])}
            error={getError(errors.description, serverErrors.description)}
            className="mb-10"
          />
        </div>

        <Row className="align-items-center text-center">
          <Col
            xs="12"
            sm="6"
          >
            <MainButton
              type="submit"
              color="blue"
              size="lg"
              className="w-100 mb-20"
            >
              {t('submitAppilcation.submit')}
            </MainButton>
          </Col>

          <Col
            xs="12"
            sm="6"
            className="text-sm-left"
          >
            <ButtonLink
              text={t('submitAppilcation.cancel')}
              className="mb-20"
              onClick={closeModal}
            />
          </Col>
        </Row>
      </form>
    );
  }
}

export default Revalidation(SubmitApplicationForm);
