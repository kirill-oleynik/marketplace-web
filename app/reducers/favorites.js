import { combineReducers } from 'redux';

import {
  SUCCESS, FAVORITES_FETCH_ALL, AUTH_SIGN_OUT,
  APPLICATIONS_ADD_TO_FAVORITES, APPLICATIONS_REMOVE_FROM_FAVORITES
} from '../constants';

const favoritesReduceFn = (accumulator, favorite) => ({
  ...accumulator,
  [favorite.id]: {
    id: favorite.id,
    application_id: favorite.applicationId || favorite.application.id
  }
});

export const ids = (state = [], action) => {
  switch (action.type) {
    case FAVORITES_FETCH_ALL + SUCCESS:
      return action.payload.favorites.map((favorite) => favorite.id);
    case APPLICATIONS_ADD_TO_FAVORITES + SUCCESS:
      return [action.payload.favorite.id, ...state];
    case APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS:
      return state.filter((id) => id !== action.payload.favorite.id);
    case AUTH_SIGN_OUT + SUCCESS:
      return [];
    default:
      return state;
  }
};

export const byId = (state = {}, action) => {
  switch (action.type) {
    case FAVORITES_FETCH_ALL + SUCCESS:
      return action.payload.favorites.reduce(favoritesReduceFn, state);
    case APPLICATIONS_ADD_TO_FAVORITES + SUCCESS:
      return [action.payload.favorite].reduce(favoritesReduceFn, state);
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId
});
