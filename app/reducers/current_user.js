import { PROFILE_CREATE_SUCCESS } from '../constants/profile_constants';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_SUCCESS:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
};

export default currentUser;
