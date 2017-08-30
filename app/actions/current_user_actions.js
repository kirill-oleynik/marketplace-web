import { createUser, logInUser } from '../services/api';
import { homePage } from '../services/router';

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

export const logInAndRedirect = (data) => (dispatch) => (
  dispatch(logIn(data))
    .then(() => homePage())
);

export const signUpAndLogIn = (data) => (dispatch) => (
  dispatch(signUp(data))
    .then(() => dispatch(logInAndRedirect(data)))
);
