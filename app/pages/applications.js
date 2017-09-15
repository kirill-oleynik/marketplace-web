import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import withReduxAndSaga from '../store';

import { fetchAll } from '../actions/categories_actions';
import { fetch as fetchApplication } from '../actions/applications_actions';

import AppProfileContainer from '../containers/app_profile_container';

class Applications extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const commonTranslations = await getTranslations('common');
    const applicationsTranslations = await getTranslations('applications');

    ctx.store.dispatch(
      fetchAll()
    );
    ctx.store.dispatch(
      fetchApplication(ctx.query.slug)
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
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>App profile</title>
          </Head>

          <AppProfileContainer />
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Applications);
