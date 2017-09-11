import { combineReducers } from 'redux';

import { SUCCESS, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL } from '../constants';

const applicationsReduceFn = (accumulator, application) => ({
  ...accumulator,
  [application.id]: application
});

export const byId = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return action.payload.category.applications.reduce(
        applicationsReduceFn, state
      );
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return action.payload.categories.reduce((accumulator, category) => (
        {
          ...accumulator,
          ...category.applications.reduce(applicationsReduceFn, {})
        }
      ), {});
    default:
      return state;
  }
};

export default combineReducers({
  byId
});
