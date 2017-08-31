import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Modal } from 'reactstrap';
import MainButton from './main_button';
import MainInput from './main_input';
import MainTextarea from './main_textarea';
import ButtonLink from './button_link';

const SubmitApp = ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} className="main-modal">
    <Container>
      <div className="text-right pt-30">
        <button type="button">
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>
      <Row className="main-modal__content">
        <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
          <p className="font-24 font-700">Submit your app for review</p>
          <div className="mb-20">
            <Row>
              <Col xs="12" sm="6">
                <MainInput name="name" label="First Name" className="mb-10" />
              </Col>
              <Col xs="12" sm="6">
                <MainInput name="name" label="Last Name" className="mb-10" />
              </Col>
            </Row>
            <MainInput type="email" name="email" label="Email" className="mb-10" />
            <MainInput name="url" label="App URL" className="mb-10" />
            <MainTextarea name="description" label="App Description" className="mb-10" />
          </div>
          <Row className="align-items-center text-center">
            <Col xs="12" sm="6">
              <MainButton color="blue" size="lg" className="w-100 mb-20">Submit</MainButton>
            </Col>
            <Col xs="12" sm="6" className="text-sm-left">
              <ButtonLink text="Cancel" className="mb-20" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Modal>
);

SubmitApp.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

SubmitApp.defaultProps = {
  isOpen: false
};

export default SubmitApp;
