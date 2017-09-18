import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

export const RemoveFromFavorites = ({ t, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="favourites-activities"
  >
    <span className="favourites-activities__addeded">
      <i className="icon icon-heart-filled in-black-035 font-16 mr-10" />

      <span className="favourites-add__text">
        {t('appProfile.favorites.added')}
      </span>
    </span>

    <span className="favourites-activities__remove">
      <span className="relative mr-10">
        <i className="icon icon-heart-filled in-black-035 font-16" />
        <i className="icon icon-cross favourites-activities__remove-cross" />
      </span>

      <span className="favourites-add__text">
        {t('appProfile.favorites.remove')}
      </span>
    </span>
  </button>
);

RemoveFromFavorites.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default translate(['applications'])(RemoveFromFavorites);
