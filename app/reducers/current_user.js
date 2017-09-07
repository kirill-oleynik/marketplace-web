import {
  SUCCESS, PROFILE_CREATE, AUTH_FETCH_USER, PROFILE_UPDATE
} from '../constants';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_FETCH_USER + SUCCESS:
      return action.payload.user;
    case PROFILE_CREATE + SUCCESS:
    case PROFILE_UPDATE + SUCCESS:
      return { ...state, ...action.payload.profile };
    default:
      return state;
  }
};

export default currentUser;
