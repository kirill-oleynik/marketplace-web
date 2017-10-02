import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import { scrollToElement } from '../helpers/dom_helpers';

import { fetchAll } from '../actions/categories_actions';
import HomeContainer from '../containers/home_container';

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

  static async getInitialProps({ store }) {
    store.dispatch(
      fetchAll()
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
        <div>
          <Head>
            <title>
              {i18n.t('home:pageTitle')}
            </title>
          </Head>

          <HomeContainer />
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(
  withTranslations('home', 'common')(Index)
);
