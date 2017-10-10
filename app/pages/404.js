import React, { Component } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';
import { load } from '../actions/page_actions';

import MessageBlock from '../components/message_block';
import HeaderContainer from '../containers/header_container';
import FooterContainer from '../containers/footer_container';
import GeneralFooter from '../components/footer/general_footer';

class NotFound extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, ...rest }) {
    store.dispatch(
      load({
        name: 'not_found',
        context: rest
      })
    );
  }

  render() {
    const { i18n } = this.props;

    return (
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

            <FooterContainer>
              <GeneralFooter />
            </FooterContainer>
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(
  withTranslations('common')(NotFound)
);
