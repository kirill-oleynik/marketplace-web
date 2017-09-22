import React from 'react';
import PropTypes from 'prop-types';

import AddToFavorites from './add_to_favorites';
import RemoveFromFavorites from './remove_from_favorites';

const ToggleFavorite = ({
  addToFavorites, removeFromFavorites, application, disabled
}) => (
  application.favorite ? (
    <RemoveFromFavorites
      disabled={disabled}
      onClick={() => removeFromFavorites(application.favorite)}
    />
  ) : (
    <AddToFavorites
      disabled={disabled}
      onClick={() => addToFavorites(application)}
    />
  )
);

ToggleFavorite.propTypes = {
  disabled: PropTypes.bool.isRequired,
  application: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

export default ToggleFavorite;
