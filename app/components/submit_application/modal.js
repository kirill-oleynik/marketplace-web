import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Modal } from 'reactstrap';
import SubmitApplicationFormContainer from '../../containers/submit_application/form_container';

export const SubmitApplicationModal = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    className="main-modal"
  >
    <Container>
      <div className="text-right pt-30">
        <button
          type="button"
          onClick={closeModal}
        >
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>

      <Row className="main-modal__content">
        <Col
          xs="12"
          sm={{ size: 8, offset: 2 }}
          md={{ size: 4, offset: 4 }}
        >
          <SubmitApplicationFormContainer />
        </Col>
      </Row>
    </Container>
  </Modal>
);

SubmitApplicationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default SubmitApplicationModal;
