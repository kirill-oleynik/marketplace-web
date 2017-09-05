import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import MainFooter from '../components/footer';
import Header from '../containers/header_container';
import AppBlock from '../components/app_block';
import GoTopLink from '../components/go_top_link';
import withReduxAndSaga from '../store';

class Search extends Component {
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
            <title>Search</title>
          </Head>

          <div className="page-container">
            <Header />
            <main className="flex-grow-1">
              <Container>
                <section className="pt-60">
                  <p className="font-24 font-700">Applications</p>
                  <AppBlock />
                  <div className="divider divider--dark mb-30" />
                  <p className="font-24 font-700">Categories</p>
                  <AppBlock />
                </section>
              </Container>
              <GoTopLink />
            </main>
            <MainFooter />
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Search);
