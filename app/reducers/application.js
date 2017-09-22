import { combineReducers } from 'redux';
import { SUCCESS, AUTH_SIGN_OUT, APPLICATIONS_FETCH_GALLERY } from '../constants';

export const gallery = (state = {}, action = {}) => {
  switch (action.type) {
    case APPLICATIONS_FETCH_GALLERY + SUCCESS:
      return action.payload.gallery;
    case AUTH_SIGN_OUT + SUCCESS:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  gallery
});
