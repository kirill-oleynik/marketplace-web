import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../../store';
import withTranslations from '../../with_translations';

import Header from '../../containers/header_container';
import AllRights from '../../components/all_rights';
import ResetPasswordRequestContainer from '../../containers/reset_password/request_container';

const ResetPasswordRequest = ({ i18n }) => (
  <I18nextProvider i18n={i18n}>
    <div>
      <Head>
        <title>
          {i18n.t('resetPassword:title')}
        </title>
      </Head>

      <div className="page-container">
        <Header />

        <main className="login__container flex-grow-1">
          <div className="login__wrap">
            <Container>
              <ResetPasswordRequestContainer />

              <AllRights />
            </Container>
          </div>
        </main>
      </div>
    </div>
  </I18nextProvider>
);

ResetPasswordRequest.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default withReduxAndSaga(
  withTranslations('resetPassword', 'common')(ResetPasswordRequest)
);
