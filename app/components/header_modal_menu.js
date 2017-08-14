import { PropTypes } from 'react';
import { Container, Modal, ModalHeader } from 'reactstrap';
import MainButton from './main_button';

export default ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} className="header-modal">
    <Container>
      <ModalHeader toggle={toggle} />
      <div>
        <h4 className="header-modal__user-name">Steve Adams</h4>
        <p className="header-modal__user-email">steveadams@gmail.com</p>
        <div>
          <a href="/" className="header-modal__link">Log In</a>
          <a href="/" className="header-modal__link">Sign Up</a>
        </div>
      </div>
    </Container>
    <div className="divider mb-20" />
    <Container>
      <div>
        <a href="/" className="header-modal__link">View Profile</a>
        <a href="/" className="header-modal__link">Favorites</a>
      </div>
      <MainButton color="white" size="sm" className="w-100 mb-30">Submit App</MainButton>
    </Container>
    <div className="divider mb-20" />
    <Container>
      <a href="/" className="header-modal__link">
        <i className="header-modal__logout icon icon-log-out" />
        <span className="d-inline-block align-middle">Log Out</span>
      </a>
    </Container>
  </Modal>
)

Modal.propTypes = {
  isOpen:  PropTypes.bool,
  toggle:  PropTypes.func
};
