import Router from 'next/router';
import { createUser, logInUser } from '../services/api';
import { homePage } from '../routes';

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
    .then(() => Router.push(homePage))
    .catch(() => {})
);

export const signUpAndLogIn = (data) => (dispatch) => (
  dispatch(signUp(data))
    .then(() => dispatch(
      logInAndRedirect({
        email: data.email,
        password: data.password
      })
    ))
    .catch(() => {})
);
