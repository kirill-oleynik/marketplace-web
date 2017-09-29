import { combineReducers } from 'redux';
import { SUCCESS, SEARCH_FETCH } from '../constants';

export const categoryIds = (state = [], action) => {
  switch (action.type) {
    case SEARCH_FETCH + SUCCESS:
      return action.payload.data.categories.map((category) => category.id);
    default:
      return state;
  }
};

export const applicationIds = (state = [], action) => {
  switch (action.type) {
    case SEARCH_FETCH + SUCCESS:
      return action.payload.data.applications.map((application) => application.id);
    default:
      return state;
  }
};

export default combineReducers({
  categoryIds,
  applicationIds
});
