import { combineReducers } from 'redux';

import {
  PROFILE_MODAL_TOGGLE,
  PROFILE_UPDATE_FAILURE
} from '../constants/profile_constants';

const modalIsActive = (state = false, action = {}) => {
  switch (action.type) {
    case PROFILE_MODAL_TOGGLE:
      return action.modalState;
    default:
      return state;
  }
};

const errors = (state = {}, action = {}) => {
  switch (action.type) {
    case PROFILE_UPDATE_FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

export default combineReducers({
  modalIsActive,
  errors
});
