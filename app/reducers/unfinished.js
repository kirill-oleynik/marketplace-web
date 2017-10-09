import { combineReducers } from 'redux';

import { FINISH, PAGE_LOAD, UNFINISHED_SET, UNFINISHED_CLEAR } from '../constants';

export const route = (state = {}, action) => {
  switch (action.type) {
    case UNFINISHED_SET:
      return action.payload.route;
    case UNFINISHED_CLEAR:
      return {};
    case PAGE_LOAD + FINISH:
      return action.payload.name === 'sign_in' ||
             action.payload.name === 'sign_up' ? state : {};
    default:
      return state;
  }
};

export const unfinishedAction = (state = {}, action) => {
  switch (action.type) {
    case UNFINISHED_SET:
      return action.payload.action || {};
    case UNFINISHED_CLEAR:
      return {};
    case PAGE_LOAD + FINISH:
      return action.payload.name === 'sign_in' ||
             action.payload.name === 'sign_up' ? state : {};
    default:
      return state;
  }
};

export default combineReducers({
  route,
  action: unfinishedAction
});
