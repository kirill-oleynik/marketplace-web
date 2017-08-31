import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Modal } from 'reactstrap';
import UserProfileTabs from './user_profile_modal_tabs';

const UserProfile = ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} className="main-modal">
    <Container>
      <div className="text-right pt-30">
        <button type="button">
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>
      <Row className="main-modal__content">
        <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
          <p className="font-24 font-700 mb-30">Steve Adams</p>
          <UserProfileTabs />
        </Col>
      </Row>
    </Container>
  </Modal>
);

UserProfile.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

UserProfile.defaultProps = {
  isOpen: true
};

export default UserProfile;
