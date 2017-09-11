import { combineReducers } from 'redux';
import snakeCase from 'lodash/snakeCase';

import {
  SUCCESS, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL, CATEGORIES_COLLAPSE
} from '../constants';

const categoryFactory = (category, isFetched = false) => ({
  ...category,
  isFetched,
  slug: snakeCase(category.title),
  applications: category.applications.map((applications) => (
    applications.id
  ))
});

export const ids = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return action.payload.categories.map((category) => category.id);
    default:
      return state;
  }
};

export const byId = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return action.payload.categories.reduce((accumulator, category) => ({
        ...accumulator,
        [category.id]: categoryFactory(category)
      }), {});
    case CATEGORIES_FETCH + SUCCESS:
      return {
        ...state,
        [action.payload.category.id]: categoryFactory(
          action.payload.category, true
        )
      };
    case CATEGORIES_COLLAPSE:
      return {
        ...state,
        [action.payload.id]: categoryFactory(state[action.payload.id])
      };
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId
});
