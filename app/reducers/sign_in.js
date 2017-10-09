import { combineReducers } from 'redux';

import { FINISH, FAILURE, PAGE_LOAD, AUTH_SIGN_IN } from '../constants';

export const errors = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN + FAILURE:
      return action.payload.error.violations
        ? action.payload.error.violations
        : { authentication: action.payload.error.message };
    case PAGE_LOAD + FINISH:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
