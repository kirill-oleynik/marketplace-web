import { combineReducers } from 'redux';

import { NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../constants';

export const event = (state = '', action) => {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return action.payload.event;
    case NOTIFICATION_HIDE:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  event
});
