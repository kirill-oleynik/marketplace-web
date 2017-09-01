import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { getCurrentUser } from '../selectors/current_user_selectors';
import Header from '../components/header';
import UserProfileModal from '../components/user_profile_modal';

export class HeaderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      userProfileModalActive: false
    };

    this.openUserProfile = this.openUserProfile.bind(this);
    this.closeUserProfile = this.closeUserProfile.bind(this);
  }

  openUserProfile() {
    this.setState({
      userProfileModalActive: true
    });
  }

  closeUserProfile() {
    this.setState({
      userProfileModalActive: false
    });
  }

  render() {
    const { t, currentUser } = this.props;

    return (
      <div>
        <Header
          t={t}
          currentUser={currentUser}
          openUserProfile={this.openUserProfile}
        />

        <UserProfileModal
          isOpen={this.state.userProfileModalActive}
          closeModal={this.closeUserProfile}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, null)(
  translate(['header'])(HeaderContainer)
);
