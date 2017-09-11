import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { getProfileModalState } from '../../selectors/profile_selectors';
import { getCurrentUser } from '../../selectors/current_user_selectors';
import ProfileModal from '../../components/profile/profile_modal';
import { toggleProfileModal } from '../../actions/profile_actions';

export class ProfileContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    profileModalActive: PropTypes.bool.isRequired,
    toggleProfileModal: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.closeProfileModal = this.closeProfileModal.bind(this);
  }

  closeProfileModal() {
    this.props.toggleProfileModal(false);
  }

  render() {
    const { t, currentUser, profileModalActive } = this.props;

    return (
      <ProfileModal
        t={t}
        isOpen={profileModalActive}
        closeModal={this.closeProfileModal}
        currentUser={currentUser}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  profileModalActive: getProfileModalState(state)
});

const mapDispatchToProps = {
  toggleProfileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['profile'])(ProfileContainer)
);
