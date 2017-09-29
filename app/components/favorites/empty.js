import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { home } from '../../routes';

import MainButton from '../main_button';

export const EmptyFavorites = ({ t }) => (
  <div className="message-block">
    <img
      alt=""
      src="/static/images/favorites.png"
      className="message-block__img message-block__img--favorites"
      srcSet="/static/images/favorites@2x.png 2x, /static/images/favorites@3x.png 3x"
    />

    <p className="font-24 mb-10">
      {t('empty.title')}
    </p>

    <p className="font-14 mb-30">
      {t('empty.description')}
    </p>

    <Link href={home}>
      <MainButton size="md" color="blue">
        {t('empty.backToHome')}
      </MainButton>
    </Link>
  </div>
);

EmptyFavorites.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(['favorites'])(EmptyFavorites);
