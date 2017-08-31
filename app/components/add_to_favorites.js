import React from 'react';
import PropTypes from 'prop-types';

const AddToFavorites = ({ added }) => {
  if (added) {
    return (
      <button type="button" className="favourites-activities">
        <span className="favourites-activities__addeded">
          <i className="icon icon-heart-filled in-black-035 font-16 mr-10" />
          <span className="favourites-add__text">Added to Favorites</span>
        </span>
        <span className="favourites-activities__remove">
          <span className="relative mr-10">
            <i className="icon icon-heart-filled in-black-035 font-16" />
            <i className="icon icon-cross favourites-activities__remove-cross" />
          </span>
          <span className="favourites-add__text">Remove</span>
        </span>
      </button>
    );
  }
  return (
    <button type="button" className="favourites-add">
      <i className="icon icon-heart in-black-035 font-16 mr-10" />
      <span className="favourites-add__text">Add to Favorites</span>
    </button>
  );
};

AddToFavorites.defaultProps = {
  added: false
};

AddToFavorites.propTypes = {
  added: PropTypes.bool.isRequired
};

export default AddToFavorites;
