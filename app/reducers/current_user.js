import { PROFILE_CREATE_SUCCESS } from '../constants/profile_constants';
import {
  CURRENT_USER_GET_INFO_SUCCESS
} from '../constants/current_user_constants';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_SUCCESS:
      return { ...state, ...action.payload.data };
    case CURRENT_USER_GET_INFO_SUCCESS:
      return action.payload.data.data;
    default:
      return state;
  }
};

export default currentUser;
