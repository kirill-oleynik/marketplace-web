import { combineReducers } from 'redux';
import { SUCCESS, APPLICATIONS_FETCH_GALLERY } from '../constants';

export const gallery = (state = {}, action = {}) => {
  switch (action.type) {
    case APPLICATIONS_FETCH_GALLERY + SUCCESS:
      return action.payload.gallery;
    default:
      return state;
  }
};

export default combineReducers({
  gallery
});
