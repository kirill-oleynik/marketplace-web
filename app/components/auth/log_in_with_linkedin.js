import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';

import { linkedinSignIn } from '../../routes';

export const LogInWithLinkedin = ({ t, className }) => (
  <a
    href={linkedinSignIn}
    className={classNames(
      className,
      'button-login-with-socials',
      'button-login-with-socials--linkedin'
    )}
  >
    <i className="icon icon-linkedin button-login-with-socials__icon" />

    <span>{t('linkedin')}</span>
  </a>
);

LogInWithLinkedin.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func.isRequired
};

LogInWithLinkedin.defaultProps = {
  className: ''
};

export default translate(['common'])(LogInWithLinkedin);
