import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/current_user_selectors';
import Header from '../components/header';
import ProfileContainer from './profile_container';
import { toggleProfileModal } from '../actions/profile_actions';

export class HeaderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    toggleProfileModal: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.openProfileModal = this.openProfileModal.bind(this);
  }

  openProfileModal() {
    this.props.toggleProfileModal(true);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header
          currentUser={currentUser}
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
  toggleProfileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
