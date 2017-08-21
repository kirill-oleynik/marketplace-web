import { createUser } from '../services/api';
import { CURRENT_USER_SIGN_UP } from '../constants/current_user_constants';

export const signUp = (data) => ({
  type: CURRENT_USER_SIGN_UP,
  payload: {
    request: createUser(data)
  }
});
