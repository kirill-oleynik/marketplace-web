import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';

import { home } from '../../routes';
import { getCurrentYear } from '../../helpers/dates_helpers';

export const GeneralFooter = ({ t, onTermsOfUseClick, onPrivacyPolicyClick }) => (
  <footer>
    <Container>
      <div className="main-footer main-footer-js">
        <div className="main-footer__wrap">
          <Link href={home}>
            <a className="page-main-logo in-blue-500">
              {t('footer.applicationName')}
            </a>
          </Link>

          <p className="font-14 in-black-035 ml-10 mb-0">
            {t('footer.copyright', { year: getCurrentYear() })}
          </p>
        </div>

        <div className="main-footer__wrap">
          <span
            onClick={onTermsOfUseClick}
            className="main-footer__link main-footer__terms-link"
          >
            {t('footer.termsOfUse')}
          </span>

          <span
            onClick={onPrivacyPolicyClick}
            className="main-footer__link main-footer__privacy-link"
          >
            {t('footer.privacyPolicy')}
          </span>
        </div>
      </div>
    </Container>
  </footer>
);

GeneralFooter.propTypes = {
  t: PropTypes.func.isRequired,
  onTermsOfUseClick: PropTypes.func.isRequired,
  onPrivacyPolicyClick: PropTypes.func.isRequired
};

export default translate(['common'])(GeneralFooter);
