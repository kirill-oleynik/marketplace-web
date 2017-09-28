import { combineReducers } from 'redux';

import {
  FAILURE, RESET_PASSWORD_REQUEST
} from '../constants';

const requestErrors = (state = {}, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST + FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

export default combineReducers({
  requestErrors
});
