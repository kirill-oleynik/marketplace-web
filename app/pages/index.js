import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
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
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps({ store }) {
    const homeTranslations = await getTranslations('home');
    const commonTranslations = await getTranslations('common');

    store.dispatch(
      fetchAll()
    );

    return {
      translations: { ...homeTranslations, ...commonTranslations }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  componentDidMount() {
    const { url } = this.props;

    scrollToCategory(url);
  }

  componentWillReceiveProps({ url }) {
    scrollToCategory(url);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>
              {this.i18n.t('home:title')}
            </title>
          </Head>

          <HomeContainer />
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Index);
