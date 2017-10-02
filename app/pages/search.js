import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import MainLayout from '../layouts/main_layout';
import SearchContainer from '../containers/search_container';

const Search = ({ i18n }) => (
  <I18nextProvider i18n={i18n}>
    <div>
      <Head>
        <title>
          {i18n.t('search:pageTitle')}
        </title>
      </Head>

      <MainLayout>
        <SearchContainer />
      </MainLayout>
    </div>
  </I18nextProvider>
);

Search.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default withReduxAndSaga(
  withTranslations('search', 'common')(Search)
);
