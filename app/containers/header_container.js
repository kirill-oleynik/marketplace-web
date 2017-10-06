import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { signOut } from '../actions/auth_actions';
import { toggleProfileModal } from '../actions/profile_actions';
import { fetch as searchFetch } from '../actions/search_actions';
import { getCurrentUser } from '../selectors/current_user_selectors';
import { getCategories, getApplications } from '../selectors/search_selectors';
import { toggleSubmitApplicationModal } from '../actions/submit_application_actions';

import Header from '../components/header';
import ProfileContainer from './profile/profile_container';
import HeaderModalMenu from '../components/header_modal_menu';
import SubmitApplicationModalContainer from './submit_application/modal_container';

export class HeaderContainer extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    currentUser: PropTypes.object.isRequired,
    toggleProfileModal: PropTypes.func.isRequired,
    toggleSubmitApplicationModal: PropTypes.func.isRequired
  }

  static defaultProps = {
    fixed: false
  }

  state = {
    isMenuOpen: false
  }

  openProfileModal = () => {
    this.props.toggleProfileModal(true);
  }

  openSubmitApplicationModal = () => {
    this.props.toggleSubmitApplicationModal(true);
  }

  handleMenuClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    const { isMenuOpen } = this.state;
    const { fixed, currentUser } = this.props;

    return (
      <div
        className={classNames({
          'main-header--fixed': fixed
        })}
      >
        <Header
          onMenuClick={this.handleMenuClick}
          openProfile={this.openProfileModal}
          openSubmitApplication={this.openSubmitApplicationModal}
          {...this.props}
        />

        <ProfileContainer />

        <SubmitApplicationModalContainer />

        <HeaderModalMenu
          isOpen={isMenuOpen}
          currentUser={currentUser}
          toggle={this.handleMenuClick}
          openProfile={this.openProfileModal}
          openSubmitApplication={this.openSubmitApplicationModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  searchCategories: getCategories(state),
  searchApplications: getApplications(state)
});

const mapDispatchToProps = {
  signOut,
  searchFetch,
  toggleProfileModal,
  toggleSubmitApplicationModal
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
