import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Modal } from 'reactstrap';
import UserProfileTabs from './user_profile_modal_tabs';

const UserProfileModal = ({ isOpen, closeModal, currentUser }) => (
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
          md={{ size: 6, offset: 3 }}
        >
          <p className="font-24 font-700 mb-30">
            { currentUser.fullName }
          </p>

          <UserProfileTabs />
        </Col>
      </Row>
    </Container>
  </Modal>
);

UserProfileModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

UserProfileModal.defaultProps = {
  isOpen: false
};

export default UserProfileModal;
