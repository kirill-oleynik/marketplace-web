import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import redirect from 'next-redirect';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import { signIn } from '../routes';
import { getCurrentUser } from '../selectors/current_user_selectors';
import { fetchAll as fetchAllFavorites } from '../actions/favorites_actions';
import { fetchAll as fetchAllCategories } from '../actions/categories_actions';

import MainLayout from '../layouts/main_layout';
import FavoritesContainer from '../containers/favorites_container';

class Favorites extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  };

  static async getInitialProps({ store, ...ctx }) {
    const currentUser = getCurrentUser(
      store.getState()
    );

    if (!currentUser.id) {
      return redirect(ctx, signIn);
    }

    store.dispatch(
      fetchAllFavorites()
    );

    store.dispatch(
      fetchAllCategories()
    );

    return {};
  }

  render() {
    const { i18n } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <Head>
            <title>
              {i18n.t('favorites:pageTitle')}
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

export default withReduxAndSaga(
  withTranslations('favorites', 'common')(Favorites)
);
