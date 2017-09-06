import { combineReducers } from 'redux';
import { SUCCESS, CATEGORIES_FETCH } from '../constants';

export const ids = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return action.payload.categories.map((category) => category.id);
    default:
      return state;
  }
};

export const byId = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return action.payload.categories.reduce((accumulator, category) => (
        { ...accumulator, [category.id]: category }
      ), {});
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId
});
