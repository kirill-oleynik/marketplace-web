import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ConfirmationModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    text: PropTypes.string,
    t: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    action: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: '',
    isOpen: false
  }

  handleAcceptClick = () => {
    const { close, action } = this.props;

    close();
    action();
  }

  render() {
    const { t, text, close, isOpen } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close} />

        <ModalBody>
          {text || t('confirmation.text')}
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={this.handleAcceptClick}
          >
            {t('confirmation.accept')}
          </Button>

          <Button
            color="secondary"
            onClick={close}
          >
            {t('confirmation.cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default translate(['common'])(ConfirmationModal);
