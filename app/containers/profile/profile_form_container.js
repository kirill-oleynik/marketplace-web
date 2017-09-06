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
import { updateProfile } from '../../actions/profile_actions';
import { getDifference } from '../../helpers/form_helpers';

export class ProfileFormContainer extends Component {
  static propTypes = {
    updateProfile: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      needPasswordConfirmation: false
    };

    this.initialFormState = {
      firstName: props.currentUser.firstName || '',
      lastName: props.currentUser.lastName || '',
      email: props.currentUser.email || '',
      organization: props.currentUser.organization || '',
      jobTitle: props.currentUser.jobTitle || '',
      phone: props.currentUser.phone || '',
      password: ''
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
            prop: props.t('profileTab.organization')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('profileTab.organization')
          })
        ]
      ],
      jobTitle: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.jobTitle')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('profileTab.jobTitle')
          })
        ]
      ],
      phone: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.phone')
          })
        ],
        [
          isLessThan(30),
          props.t('common:validations.isLessThan', {
            count: 30,
            prop: props.t('profileTab.phone')
          })
        ],
        [
          isNumeric,
          props.t('common:validations.isNumeric', {
            prop: props.t('profileTab.phone')
          })
        ]
      ]
    };

    this.passwordValidationRule = {
      password: [
        [
          isNotEmpty,
          props.t('common:validations.isNotEmpty', {
            prop: props.t('profileTab.passwordError')
          })
        ]
      ]
    };
  }

  definePasswordValidation(flag) {
    if (flag) {
      delete this.validationRules.password;
    } else {
      Object.assign(this.validationRules, this.passwordValidationRule);
    }
  }

  dataToSubmit = (values) => getDifference(this.initialFormState, values);

  handleFormSubmit = (values) => {
    this.props.updateProfile(
      this.props.currentUser.id,
      this.dataToSubmit(values)
    );
  }

  handleEmailChange = (event) => {
    const sameValue = this.props.currentUser.email === event.target.value;
    this.definePasswordValidation(sameValue);
    this.setState({
      needPasswordConfirmation: !sameValue
    });

    return event;
  }

  render() {
    return (
      <ProfileForm
        validateSingle
        validateOnChange
        rules={this.validationRules}
        initialState={this.initialFormState}
        onSubmit={this.handleFormSubmit}
        onEmailChange={this.handleEmailChange}
        needPasswordConfirmation={this.state.needPasswordConfirmation}
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
