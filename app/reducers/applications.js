import { combineReducers } from 'redux';

import { SUCCESS, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL } from '../constants';

const applicationsReduceFn = (accumulator, application) => ({
  ...accumulator,
  [application.id]: application
});

const applicationIdReduceFn = (accumulator, application) => ([
  ...accumulator,
  application.id
]);

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

export const ids = (state = new Set([]), action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return new Set(
        action.payload.category.applications.reduce(
          applicationIdReduceFn, state
        )
      );
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return new Set(
        action.payload.categories.reduce((accumulator, category) => (
          [
            ...accumulator,
            ...category.applications.reduce(applicationIdReduceFn, {})
          ]
        ), [])
      );
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId
});
