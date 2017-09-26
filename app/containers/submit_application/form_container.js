import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import {
  toggleSubmitApplicationModal, submitApplication
} from '../../actions/submit_application_actions';
import {
  getSubmitApplicationErrors
} from '../../selectors/submit_application_selectors';
import SubmitApplicationForm from '../../components/submit_application/form';
import {
  isNotEmpty, isUrl, isMoreThan
} from '../../services/validations';

class SubmitApplicationFormContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    submitApplication: PropTypes.func.isRequired,
    toggleSubmitApplicationModal: PropTypes.func.isRequired
  }

  initialFormState = {
    url: '',
    description: ''
  }

  validationRules = {
    url: [
      [
        isNotEmpty,
        this.props.t('common:validations.isNotEmpty', {
          prop: this.props.t('common:submitAppilcation.fields.url')
        })
      ],
      [
        isUrl,
        this.props.t('common:validations.isUrl', {
          prop: this.props.t('common:submitAppilcation.fields.url')
        })
      ]
    ],
    description: [
      [
        isNotEmpty,
        this.props.t('common:validations.isNotEmpty', {
          prop: this.props.t('common:submitAppilcation.fields.description')
        })
      ],
      [
        isMoreThan(10),
        this.props.t('common:validations.isMoreThan', {
          count: 10,
          prop: this.props.t('common:submitAppilcation.fields.description')
        })
      ]
    ]
  };

  handleFormSubmit = (data) => {
    this.props.submitApplication(data);
  }

  closeSubmitApplicationModal = () => {
    this.props.toggleSubmitApplicationModal(false);
  }

  render() {
    return (
      <SubmitApplicationForm
        validateSingle
        validateOnChange
        rules={this.validationRules}
        initialState={this.initialFormState}
        onSubmit={this.handleFormSubmit}
        closeModal={this.closeSubmitApplicationModal}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  errors: getSubmitApplicationErrors(state)
});

const mapDispatchToProps = {
  toggleSubmitApplicationModal,
  submitApplication
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['common'])(SubmitApplicationFormContainer)
);
