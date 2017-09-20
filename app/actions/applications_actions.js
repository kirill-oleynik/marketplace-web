import {
  APPLICATION_FETCH,
  APPLICATIONS_ADD_TO_FAVORITES,
  APPLICATIONS_REMOVE_FROM_FAVORITES,
  APPLICATIONS_FETCH_GALLERY
} from '../constants';

export const fetch = (applicationId) => ({
  type: APPLICATION_FETCH,
  payload: {
    id: applicationId
  }
});

export const addToFavorites = (application) => ({
  type: APPLICATIONS_ADD_TO_FAVORITES,
  payload: {
    id: application.id
  }
});

export const removeFromFavorites = (application) => ({
  type: APPLICATIONS_REMOVE_FROM_FAVORITES,
  payload: {
    id: application.favorite.id
  }
});

export const fetchApplicationGallery = (slug) => ({
  type: APPLICATIONS_FETCH_GALLERY,
  payload: {
    slug
  }
});
