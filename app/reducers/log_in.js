import { combineReducers } from 'redux';
import { CURRENT_USER_LOG_IN_FAILURE } from '../constants/current_user_constants';

const errors = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_USER_LOG_IN_FAILURE:
      return action.payload.error.violations || {};
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
