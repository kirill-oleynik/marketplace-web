import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';

import { getEvent } from '../selectors/notifications_selectors';
import { hide as hideNotification } from '../actions/notifications_actions';

class NotificationsContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    event: PropTypes.string.isRequired
  }

  componentDidUpdate() {
    if (this.props.event) {
      this.showNotification();
    }
  }

  showNotification = () => {
    const { t, hide, event } = this.props;
    const text = t(`notifications.${event.split(':').join('.')}`);

    toast.success(text, {
      onClose: hide,
      position: toast.POSITION.TOP_RIGHT
    });
  }

  render() {
    return (
      <ToastContainer
        newestOnTop
        closeOnClick
        autoClose={3500}
        pauseOnHover={false}
        hideProgressBar={false}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  event: getEvent(state)
});

const mapDispatchToProps = {
  hide: hideNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['common'])(NotificationsContainer)
);
