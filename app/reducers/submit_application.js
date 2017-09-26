import { combineReducers } from 'redux';

import {
  SUCCESS, FAILURE,
  SUBMIT_APPLICATION, SUBMIT_APPLICATION_MODAL_TOGGLE
} from '../constants';

export const errors = (state = {}, action = {}) => {
  switch (action.type) {
    case SUBMIT_APPLICATION_MODAL_TOGGLE:
      return {};
    case SUBMIT_APPLICATION + FAILURE:
      return action.payload.error.violations;
    default:
      return state;
  }
};

export const modalIsActive = (state = false, action = {}) => {
  switch (action.type) {
    case SUBMIT_APPLICATION + SUCCESS:
      return false;
    case SUBMIT_APPLICATION_MODAL_TOGGLE:
      return action.payload.modalState;
    default:
      return state;
  }
};

export default combineReducers({
  errors,
  modalIsActive
});
