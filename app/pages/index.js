import React, { Component } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';
import { load } from '../actions/page_actions';
import { scrollToElement } from '../helpers/dom_helpers';

import HomeContainer from '../containers/home_container';
import NotificationsContainer from '../containers/notifications_container';

const scrollToCategory = (url = {}) => {
  const { category } = url.query || {};
  const node = document.getElementById(category);

  if (node) {
    scrollToElement(node);
  }
};

class Index extends Component {
  static propTypes = {
    url: PropTypes.object.isRequired,
    i18n: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, ...rest }) {
    store.dispatch(
      load({
        name: 'home',
        context: rest
      })
    );
  }

  componentDidMount() {
    const { url } = this.props;

    scrollToCategory(url);
  }

  componentWillReceiveProps({ url }) {
    scrollToCategory(url);
  }

  render() {
    const { i18n } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div className="home-page">
          <Head>
            <title>
              {i18n.t('home:pageTitle')}
            </title>
          </Head>

          <HomeContainer />
          <NotificationsContainer />
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(
  withTranslations('home', 'common')(Index)
);
