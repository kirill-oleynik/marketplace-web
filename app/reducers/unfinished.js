import { combineReducers } from 'redux';

import { UNFINISHED_SET, UNFINISHED_CLEAR } from '../constants';

export const route = (state = {}, action) => {
  switch (action.type) {
    case UNFINISHED_SET:
      return action.payload.route;
    case UNFINISHED_CLEAR:
      return {};
    default:
      return state;
  }
};

export const unfinishedAction = (state = {}, action) => {
  switch (action.type) {
    case UNFINISHED_SET:
      return action.payload.action;
    case UNFINISHED_CLEAR:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  route,
  action: unfinishedAction
});
