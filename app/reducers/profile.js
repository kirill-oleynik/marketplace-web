import { combineReducers } from 'redux';

import {
  PROFILE_MODAL_TOGGLE
} from '../constants/profile_constants';

const modalIsActive = (state = false, action = {}) => {
  switch (action.type) {
    case PROFILE_MODAL_TOGGLE:
      return action.modalState;
    default:
      return state;
  }
};

export default combineReducers({
  modalIsActive
});
