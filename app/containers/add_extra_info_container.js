import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { homePage } from '../routes';
import { isLessThan, isNumeric, isNotEmpty } from '../services/validations';
import AddExtraInfoForm from '../components/auth/add_extra_info_form';
import { create as createProfile } from '../actions/profile_actions';
import { getCurrentUser } from '../selectors/current_user_selectors';
import {
  getAddExtraInfoErrors,
  getAddExtraInfoInProgress
} from '../selectors/add_extra_info_selectors';

export class AddExtraInfoContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    inProgress: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.initialFormState = {
      phone: props.currentUser.phone || '',
      jobTitle: props.currentUser.jobTitle || '',
      organization: props.currentUser.organization || ''
    };

    this.validationRules = {
      phone: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.phone')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('fields.phone')
          })
        ],
        [
          isNumeric,
          props.t('common:validations.isNumeric', {
            prop: props.t('fields.phone')
          })
        ]
      ],
      jobTitle: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.jobTitle')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('fields.jobTitle')
          })
        ]
      ],
      organization: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('fields.organization')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('fields.organization')
          })
        ]
      ]
    };
  }

  handleFormSubmit = (values) => {
    this.props.createProfile(values);
  }

  render() {
    const { t, errors, cancel, inProgress } = this.props;

    return (
      <div>
        <h2 className="login-form__title text-left">
          {t('tellUsMore')}
        </h2>

        <AddExtraInfoForm
          validateSingle
          validateOnChange
          rules={this.validationRules}
          initialState={this.initialFormState}
          onSubmit={this.handleFormSubmit}
          errors={errors}
          inProgress={inProgress}
          cancel={cancel}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  errors: getAddExtraInfoErrors(state),
  inProgress: getAddExtraInfoInProgress(state)
});

const mapDispatchToProps = (dispatch) => ({
  cancel: () => Router.push(homePage),
  createProfile: (data) => dispatch(createProfile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['addExtraInfo', 'common'])(AddExtraInfoContainer)
);
