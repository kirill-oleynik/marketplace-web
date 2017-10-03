import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Modal } from 'reactstrap';

export const TermsOfUse = ({ t, isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} backdrop={false} className="main-modal">
    <Container>
      <div className="text-right pt-30">
        <button type="button" onClick={toggle}>
          <i className="icon icon-cross font-16 in-black-035" />
        </button>
      </div>

      <div className="main-modal__content pt-20 pb-20">
        <h1 className="font-24 font-700 mb-30">
          {t('termsOfUse.title')}
        </h1>

        <h2 className="font-16 font-700 mb-20">
          {t('termsOfUse.welcome')}
        </h2>

        <p className="in-black-050 mb-30">
          {t('termsOfUse.accessing')}
        </p>

        <h3 className="font-16 mb-20">
          {t('termsOfUse.usage.title')}
        </h3>

        <ul className="in-black-050 mb-30">
          <li className="main-list-item mb-5">
            {t('termsOfUse.usage.services')}
          </li>

          <li className="main-list-item mb-5">
            {t('termsOfUse.usage.content')}
          </li>

          <li className="main-list-item">
            {t('termsOfUse.usage.individuals')}
          </li>
        </ul>

        <h3 className="font-16 mb-20">
          {t('termsOfUse.definitions.title')}
        </h3>

        <ul className="in-black-050 mb-30">
          <li className="main-list-item mb-5">
            {t('termsOfUse.definitions.services')}
          </li>

          <li className="main-list-item mb-5">
            {t('termsOfUse.definitions.content')}
          </li>

          <li className="main-list-item mb-5">
            {t('termsOfUse.definitions.individuals')}
          </li>

          <li className="main-list-item mb-5">
            {t('termsOfUse.definitions.users')}
          </li>

          <li className="main-list-item mb-5">
            {t('termsOfUse.definitions.location')}
          </li>
        </ul>

        <h3 className="font-16 mb-20">
          {t('termsOfUse.rights.title')}
        </h3>

        <ol className="main-list-numbered in-black-050 mb-30">
          <li className="main-list-numbered__item mb-5">
            {t('termsOfUse.rights.services')}
          </li>

          <li className="main-list-numbered__item mb-5">
            {t('termsOfUse.rights.content')}
          </li>

          <li className="main-list-numbered__item">
            {t('termsOfUse.rights.individuals')}
          </li>
        </ol>

        <p className="font-700 mb-20">
          {t('termsOfUse.agree')}
        </p>

        <p className="font-700">
          {t('termsOfUse.lastUpdate')}
        </p>
      </div>
    </Container>
  </Modal>
);

TermsOfUse.propTypes = {
  t: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default translate(['common'])(TermsOfUse);
