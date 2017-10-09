import { combineReducers } from 'redux';

import { FINISH, FAILURE, PAGE_LOAD, AUTH_SIGN_UP } from '../constants';

export const errors = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP + FAILURE:
      return action.payload.error.violations || {};
    case PAGE_LOAD + FINISH:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
