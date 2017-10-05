import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

export const AddToFavorites = ({ t, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="favourites-add"
  >
    <i className="icon icon-heart font-16 mr-10 favourites-heart__icon" />

    <span className="favourites-add__text">
      {t('appProfile.favorites.add')}
    </span>
  </button>
);

AddToFavorites.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default translate(['applications'])(AddToFavorites);
