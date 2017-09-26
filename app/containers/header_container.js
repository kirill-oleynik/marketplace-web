import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signOut } from '../actions/auth_actions';
import { toggleProfileModal } from '../actions/profile_actions';
import { getCurrentUser } from '../selectors/current_user_selectors';
import {
  toggleSubmitApplicationModal
} from '../actions/submit_application_actions';

import Header from '../components/header';
import ProfileContainer from './profile/profile_container';
import SubmitApplicationModalContainer from './submit_application/modal_container';

export class HeaderContainer extends Component {
  static propTypes = {
    toggleProfileModal: PropTypes.func.isRequired,
    openSubmitApplication: PropTypes.func.isRequired,
    toggleSubmitApplicationModal: PropTypes.func.isRequired
  }

  openProfileModal = () => {
    this.props.toggleProfileModal(true);
  }

  openSubmitApplicationModal = () => {
    this.props.toggleSubmitApplicationModal(true);
  }

  render() {
    return (
      <div>
        <Header
          {...this.props}
          openProfile={this.openProfileModal}
          openSubmitApplication={this.openSubmitApplicationModal}
        />

        <ProfileContainer />
        <SubmitApplicationModalContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = {
  signOut,
  toggleProfileModal,
  toggleSubmitApplicationModal
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
