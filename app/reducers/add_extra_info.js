import { combineReducers } from 'redux';

import {
  FINISH, REQUEST, SUCCESS, FAILURE, PAGE_LOAD, PROFILE_CREATE
} from '../constants';

export const errors = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE + FAILURE:
      return action.payload.error.violations || {};
    case PAGE_LOAD + FINISH:
      return {};
    default:
      return state;
  }
};

export const inProgress = (state = false, action) => {
  switch (action.type) {
    case PROFILE_CREATE + REQUEST:
      return true;
    case PROFILE_CREATE + SUCCESS:
    case PROFILE_CREATE + FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  errors,
  inProgress
});
