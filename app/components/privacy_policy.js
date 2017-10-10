import React from 'react';

import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Modal } from 'reactstrap';

export const PrivacyPolicy = ({ t, isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} backdrop={false} className="main-modal">
    <Container>
      <div className="text-right pt-30">
        <button type="button" onClick={toggle}>
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>

      <div className="main-modal__content pt-20 pb-20">
        <h1 className="font-24 font-700 mb-30">
          {t('privacyPolicy.title')}
        </h1>

        <p className="in-black-050 mb-30">
          {t('privacyPolicy.test1')}
        </p>

        <p className="in-black-050 mb-30">
          {t('privacyPolicy.test2')}
        </p>

        <p className="in-black-050 mb-30">
          {t('privacyPolicy.test3')}
        </p>
      </div>
    </Container>
  </Modal>
);

PrivacyPolicy.propTypes = {
  t: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default translate(['common'])(PrivacyPolicy);
