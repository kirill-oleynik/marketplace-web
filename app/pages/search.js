import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';

import MainLayout from '../layouts/main_layout';
import SearchContainer from '../containers/search_container';

class Search extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps() {
    const commonTranslations = await getTranslations('common');
    const searchTranslations = await getTranslations('search');

    return {
      translations: { ...commonTranslations, ...searchTranslations }
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
            <title>
              {this.i18n.t('search:pageTitle')}
            </title>
          </Head>

          <MainLayout>
            <SearchContainer />
          </MainLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Search);
