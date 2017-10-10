import React from 'react';

import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { getCurrentYear } from '../../helpers/dates_helpers';

export const AuthFooter = ({ t, onTermsOfUseClick, onPrivacyPolicyClick }) => (
  <footer>
    <p className="font-12 in-black-035 mb-0">
      {t('footer.applicationName')}

      &nbsp;

      {t('footer.copyright', { year: getCurrentYear() })}
    </p>

    <p className="font-12 in-black-035 mb-0">
      <span className="rights-link rights-link__privacy" onClick={onPrivacyPolicyClick}>
        {t('footer.privacyPolicy')}
      </span>

      &nbsp;{t('footer.and')}&nbsp;

      <span className="rights-link rights-link__terms" onClick={onTermsOfUseClick}>
        {t('footer.termsOfUse')}
      </span>
    </p>
  </footer>
);

AuthFooter.propTypes = {
  t: PropTypes.func.isRequired,
  onTermsOfUseClick: PropTypes.func.isRequired,
  onPrivacyPolicyClick: PropTypes.func.isRequired
};

export default translate(['common'])(AuthFooter);
