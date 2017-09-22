import {
  SUCCESS, PROFILE_CREATE, AUTH_FETCH_USER, AUTH_SIGN_OUT, PROFILE_UPDATE
} from '../constants';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_FETCH_USER + SUCCESS:
      return action.payload.user;
    case PROFILE_CREATE + SUCCESS:
    case PROFILE_UPDATE + SUCCESS:
      return { ...state, ...action.payload.profile };
    case AUTH_SIGN_OUT + SUCCESS:
      return {};
    default:
      return state;
  }
};

export default currentUser;
