import { combineReducers } from 'redux';

import {
  FINISH, FAILURE, PAGE_LOAD, RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} from '../constants';

export const requestErrors = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST + FAILURE:
      return action.payload.error.violations;
    case PAGE_LOAD + FINISH:
      return {};
    default:
      return state;
  }
};

export const confirmErrors = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_CONFIRM + FAILURE:
      return action.payload.error.violations;
    case PAGE_LOAD + FINISH:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  requestErrors,
  confirmErrors
});
