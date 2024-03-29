import { combineReducers } from 'redux';

import {
  FAILURE, PROFILE_MODAL_TOGGLE, PROFILE_UPDATE, PASSWORD_UPDATE
} from '../constants';

const modalIsActive = (state = false, action = {}) => {
  switch (action.type) {
    case PROFILE_MODAL_TOGGLE:
      return action.payload.modalState;
    default:
      return state;
  }
};

const errors = (state = {}, action = {}) => {
  switch (action.type) {
    case PROFILE_UPDATE + FAILURE:
    case PASSWORD_UPDATE + FAILURE:
      return action.payload.error.violations;
    case PROFILE_MODAL_TOGGLE:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  modalIsActive,
  errors
});
