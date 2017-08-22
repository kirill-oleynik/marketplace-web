import { createUser, logInUser } from '../services/api';

import {
  CURRENT_USER_SIGN_UP,
  CURRENT_USER_LOG_IN
} from '../constants/current_user_constants';

export const signUp = (data) => ({
  type: CURRENT_USER_SIGN_UP,
  payload: {
    request: createUser(data)
  }
});

export const logIn = (data) => ({
  type: CURRENT_USER_LOG_IN,
  payload: {
    request: logInUser(data)
  }
});
