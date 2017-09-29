import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';

import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import withReduxAndSaga from '../store';
import { getAppProfile } from '../selectors/applications_selectors';
import { fetchAll } from '../actions/categories_actions';
import {
  fetch as fetchApplication, fetchApplicationGallery, fetchRating
} from '../actions/applications_actions';

import MainLayout from '../layouts/main_layout';
import AppProfileContainer from '../containers/app_profile_container';

class Applications extends Component {
  static propTypes = {
    application: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, query }) {
    const commonTranslations = await getTranslations('common');
    const applicationsTranslations = await getTranslations('applications');

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

    return {
      translations: { ...commonTranslations, ...applicationsTranslations }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  render() {
    const { application } = this.props;

    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>
              {application.title ? `${application.title} - ` : ''}
              {this.i18n.t('applications:pageTitle')}
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

export default withReduxAndSaga(Applications, mapStateToProps);
