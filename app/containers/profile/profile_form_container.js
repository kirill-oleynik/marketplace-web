import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import ProfileForm from '../../components/profile/profile_form';
import { getCurrentUser } from '../../selectors/current_user_selectors';
import {
  isLessThan, isNumeric, isNotEmpty, isEmail
} from '../../services/validations';
import { getProfileErrors } from '../../selectors/profile_selectors';
import { update as updateProfile } from '../../actions/profile_actions';

export class ProfileFormContainer extends Component {
  static propTypes = {
    updateProfile: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.initialFormState = {
      firstName: props.currentUser.firstName || '',
      lastName: props.currentUser.lastName || '',
      email: props.currentUser.email || '',
      organization: props.currentUser.organization || '',
      jobTitle: props.currentUser.jobTitle || '',
      phone: props.currentUser.phone || ''
    };

    this.validationRules = {
      firstName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.firstName')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('profileTab.firstName')
          })
        ]
      ],
      lastName: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.lastName')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('profileTab.lastName')
          })
        ]
      ],
      email: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.email')
          })
        ],
        [
          isEmail,
          props.t('common:validations.isEmail', {
            prop: props.t('profileTab.email')
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
      ]
    };
  }

  handleFormSubmit = (values) => {
    this.props.updateProfile(values);
  }

  render() {
    const { errors } = this.props;

    return (
      <ProfileForm
        validateSingle
        validateOnChange
        errors={errors}
        rules={this.validationRules}
        initialState={this.initialFormState}
        onSubmit={this.handleFormSubmit}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  errors: getProfileErrors(state)
});

const mapDispatchToProps = {
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['profile', 'common'])(ProfileFormContainer)
);
