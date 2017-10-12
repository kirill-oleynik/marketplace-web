import React, { Component } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import { load } from '../actions/page_actions';
import { getAppProfile } from '../selectors/applications_selectors';

import MainLayout from '../layouts/main_layout';
import ApplicationContainer from '../containers/application_container';

class Applications extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    application: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, ...rest }) {
    store.dispatch(
      load({
        name: 'applications',
        context: rest
      })
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
            <ApplicationContainer />
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
