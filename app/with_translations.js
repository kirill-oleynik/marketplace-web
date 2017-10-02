import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createI18n from './services/i18n';
import { fetchTranslations } from './services/api';

const fakeSessionStorage = {
  setItem() {},
  getItem() { return null; }
};

const isServer = typeof window === 'undefined';

const buildId = (
  isServer ? global.buildId : window.__NEXT_DATA__.buildId
) || Date.now();

const sessionStorage = isServer ? fakeSessionStorage : window.sessionStorage;

const fetchTranslation = async (translation) => {
  const name = `${translation}?${buildId}`;
  const savedTranslation = sessionStorage.getItem(name);

  if (savedTranslation) {
    return Promise.resolve(
      JSON.parse(savedTranslation)
    );
  }

  const translationFromServer = await fetchTranslations(name);

  sessionStorage.setItem(
    name, JSON.stringify(translationFromServer)
  );

  return Promise.resolve(translationFromServer);
};

function withTranslations(...translationsList) {
  return (BaseComponent) => {
    class WithTranslationsWrapper extends Component {
      static propTypes = {
        translations: PropTypes.object.isRequired
      }

      static async getInitialProps(ctx) {
        let props;
        if (BaseComponent.getInitialProps) {
          props = await BaseComponent.getInitialProps(ctx);
        }

        props = props || {};

        const translations = await Promise.all(
          translationsList.map(fetchTranslation)
        );

        return translations.reduce((accumulator, translation) => (
          {
            ...accumulator,
            translations: { ...accumulator.translations, ...translation }
          }
        ), props);
      }

      constructor(props) {
        super(props);

        this.i18n = createI18n(props.translations);
      }

      render() {
        return (
          <BaseComponent i18n={this.i18n} {...this.props} />
        );
      }
    }

    return WithTranslationsWrapper;
  };
}

export default withTranslations;
