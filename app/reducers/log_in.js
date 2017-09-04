import { combineReducers } from 'redux';
import {
  CURRENT_USER_GET_CREDENTIALS_FAILURE,
  CURRENT_USER_GET_INFO_FAILURE
} from '../constants/current_user_constants';

const errors = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_USER_GET_CREDENTIALS_FAILURE:
      return action.payload.error.violations ?
        action.payload.error.violations :
        { authentication: action.payload.error.message };
    case CURRENT_USER_GET_INFO_FAILURE:
      return action.payload.error.violations || {};
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
