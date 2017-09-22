import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signOut } from '../actions/auth_actions';
import { toggleProfileModal } from '../actions/profile_actions';
import { getCurrentUser } from '../selectors/current_user_selectors';

import Header from '../components/header';
import ProfileContainer from './profile/profile_container';

export class HeaderContainer extends Component {
  static propTypes = {
    toggleProfileModal: PropTypes.func.isRequired
  }

  openProfileModal = () => {
    this.props.toggleProfileModal(true);
  }

  render() {
    return (
      <div>
        <Header
          {...this.props}
          openProfile={this.openProfileModal}
        />

        <ProfileContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = {
  signOut,
  toggleProfileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
