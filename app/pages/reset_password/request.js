import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../../store';
import withTranslations from '../../with_translations';

import AuthLayout from '../../layouts/auth_layout';
import ResetPasswordRequestContainer from '../../containers/reset_password/request_container';

const ResetPasswordRequest = ({ i18n }) => (
  <I18nextProvider i18n={i18n}>
    <div>
      <Head>
        <title>
          {i18n.t('resetPassword:title')}
        </title>
      </Head>

      <AuthLayout>
        <ResetPasswordRequestContainer />
      </AuthLayout>
    </div>
  </I18nextProvider>
);

ResetPasswordRequest.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default withReduxAndSaga(
  withTranslations('resetPassword', 'common')(ResetPasswordRequest)
);
