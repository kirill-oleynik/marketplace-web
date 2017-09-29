import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import Header from '../containers/header_container';
import MainFooter from '../components/footer';
import MessageBlock from '../components/message_block';

class Favorites extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps() {
    const commonTranslations = await getTranslations('common');

    return {
      translations: { ...commonTranslations }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>404</title>
          </Head>

          <div className="page-container">
            <Header />
            <main className="d-flex align-items-center flex-grow-1">
              <Container>
                <section className="pt-60">
                  <MessageBlock image="404" imageSize="lg" />
                </section>
              </Container>
            </main>
            <MainFooter />
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Favorites);
