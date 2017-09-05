import { combineReducers } from 'redux';
import { FAILURE, AUTH_SIGN_UP } from '../constants';

export const errors = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP + FAILURE:
      return action.payload.error.violations || {};
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
