import { combineReducers } from 'redux';
import { FAILURE, AUTH_SIGN_IN } from '../constants';

export const errors = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN + FAILURE:
      return action.payload.error.violations
        ? action.payload.error.violations
        : { authentication: action.payload.error.message };
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
