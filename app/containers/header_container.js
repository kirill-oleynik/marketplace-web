import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/current_user_selectors';
import Header from '../components/header';
import ProfileModal from '../components/profile_modal';

export class HeaderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      userProfileModalActive: false
    };

    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
  }

  openProfile() {
    this.setState({
      userProfileModalActive: true
    });
  }

  closeProfile() {
    this.setState({
      userProfileModalActive: false
    });
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header
          currentUser={currentUser}
          openProfile={this.openProfile}
        />

        <ProfileModal
          isOpen={this.state.userProfileModalActive}
          closeModal={this.closeProfile}
          currentUser={currentUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, null)(HeaderContainer);
