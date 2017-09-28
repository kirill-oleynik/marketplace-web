import { combineReducers } from 'redux';

import {
  FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} from '../constants';

const requestErrors = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST + FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

const confirmErrors = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_CONFIRM + FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

export default combineReducers({
  requestErrors,
  confirmErrors
});
