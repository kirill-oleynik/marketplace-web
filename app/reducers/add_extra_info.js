import { combineReducers } from 'redux';

import {
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_FAILURE
} from '../constants/profile_constants';

const errors = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

const inProgress = (state = false, action) => {
  switch (action.type) {
    case PROFILE_CREATE_REQUEST:
      return true;
    case PROFILE_CREATE_SUCCESS:
    case PROFILE_CREATE_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  errors,
  inProgress
});
