import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import { getAppProfile } from '../selectors/applications_selectors';
import { fetchAll } from '../actions/categories_actions';
import {
  fetch as fetchApplication, fetchApplicationGallery, fetchRating
} from '../actions/applications_actions';

import MainLayout from '../layouts/main_layout';
import AppProfileContainer from '../containers/app_profile_container';

class Applications extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    application: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, query }) {
    store.dispatch(
      fetchAll()
    );

    store.dispatch(
      fetchApplication(query.slug)
    );

    store.dispatch(
      fetchRating(query.slug)
    );

    store.dispatch(
      fetchApplicationGallery(query.slug)
    );
  }

  render() {
    const { i18n, application } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <Head>
            <title>
              {application.title ? `${application.title} - ` : ''}
              {i18n.t('applications:pageTitle')}
            </title>
          </Head>

          <MainLayout>
            <AppProfileContainer />
          </MainLayout>
        </div>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  application: getAppProfile(state)
});

export default withReduxAndSaga(
  withTranslations('applications', 'common')(Applications),
  mapStateToProps
);
