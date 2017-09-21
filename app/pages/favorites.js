import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';

import { fetchAll as fetchAllFavorites } from '../actions/favorites_actions';
import { fetchAll as fetchAllCategories } from '../actions/categories_actions';

import MainLayout from '../layouts/main_layout';
import FavoritesContainer from '../containers/favorites_container';

class Favorites extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  };

  static async getInitialProps({ store }) {
    const commonTranslations = await getTranslations('common');
    const favoritesTranslations = await getTranslations('favorites');

    store.dispatch(
      fetchAllFavorites()
    );

    store.dispatch(
      fetchAllCategories()
    );

    return {
      translations: { ...commonTranslations, ...favoritesTranslations }
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
              {this.i18n.t('favorites:pageTitle')}
            </title>
          </Head>

          <MainLayout>
            <FavoritesContainer />
          </MainLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Favorites);
