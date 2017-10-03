import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import MessageBlock from '../components/message_block';
import HeaderContainer from '../containers/header_container';
import FooterContainer from '../containers/footer_container';

const NotFound = ({ i18n }) => (
  <I18nextProvider i18n={i18n}>
    <div>
      <Head>
        <title>404</title>
      </Head>

      <div className="page-container">
        <HeaderContainer />

        <main className="d-flex align-items-center flex-grow-1">
          <Container>
            <section className="pt-60">
              <MessageBlock image="404" imageSize="lg" />
            </section>
          </Container>
        </main>

        <FooterContainer />
      </div>
    </div>
  </I18nextProvider>
);

NotFound.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default withReduxAndSaga(
  withTranslations('common')(NotFound)
);
