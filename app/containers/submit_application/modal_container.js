import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleSubmitApplicationModal
} from '../../actions/submit_application_actions';
import {
  getSubmitApplicationModalState
} from '../../selectors/submit_application_selectors';
import SubmitApplicationModal from '../../components/submit_application/modal';

class SubmitApplicationModalContainer extends Component {
  static propTypes = {
    toggleSubmitApplicationModal: PropTypes.func.isRequired,
    submitApplicationModalActive: PropTypes.bool.isRequired
  }

  closeSubmitApplicationModal = () => {
    this.props.toggleSubmitApplicationModal(false);
  }

  render() {
    return (
      <SubmitApplicationModal
        closeModal={this.closeSubmitApplicationModal}
        isOpen={this.props.submitApplicationModalActive}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  submitApplicationModalActive: getSubmitApplicationModalState(state)
});

const mapDispatchToProps = {
  toggleSubmitApplicationModal
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitApplicationModalContainer);
