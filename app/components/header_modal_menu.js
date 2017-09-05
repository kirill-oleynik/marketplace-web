import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Modal, ModalHeader } from 'reactstrap';
import Link from 'next/link';
import { signIn, signUp } from '../routes';
import MainButton from './main_button';

const HeaderModalMenu = ({ isOpen, toggle, t, currentUser }) => (
  <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="header-modal"
  >
    <Container>
      <ModalHeader
        toggle={toggle}
      />

      <div>
        {
          currentUser.id ? (
            <div>
              <h4 className="header-modal__user-name">
                {currentUser.fullName}
              </h4>

              <p className="header-modal__user-email">
                {currentUser.email}
              </p>
            </div>
          ) : (
            <div>
              <Link href={signIn}>
                <a className="header-modal__link">
                  {t('header.logIn')}
                </a>
              </Link>

              <Link href={signUp}>
                <a className="header-modal__link">
                  {t('header.signUp')}
                </a>
              </Link>
            </div>
          )
        }
      </div>
    </Container>

    <div className="divider mb-20" />

    <Container>
      <div>
        <a href="/" className="header-modal__link">
          {t('header.viewProfile')}
        </a>

        <a href="/" className="header-modal__link">
          {t('header.favorites')}
        </a>
      </div>

      <MainButton
        color="white"
        size="sm"
        className="w-100 mb-30"
      >
        {t('header.submitApp')}
      </MainButton>
    </Container>

    <div className="divider mb-20" />

    <Container>
      <a href="/" className="header-modal__link">
        <i className="header-modal__logout icon icon-log-out" />

        <span className="d-inline-block align-middle">
          {t('header.logOut')}
        </span>
      </a>
    </Container>
  </Modal>
);

HeaderModalMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

HeaderModalMenu.defaultProps = {
  isOpen: false
};

export default translate(['common'])(HeaderModalMenu);
