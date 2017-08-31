import Router from 'next/router';
import { createUser, logInUser, fetchCurrentUser } from '../services/api';
import { addExtraInfo, homePage } from '../routes';


import {
  CURRENT_USER_SIGN_UP,
  CURRENT_USER_GET_CREDENTIALS,
  CURRENT_USER_GET_INFO
} from '../constants/current_user_constants';

export const signUp = (data) => ({
  type: CURRENT_USER_SIGN_UP,
  payload: {
    request: createUser(data)
  }
});

export const getAuthCredentials = (data) => ({
  type: CURRENT_USER_GET_CREDENTIALS,
  payload: {
    request: logInUser(data)
  }
});

export const logInAndRedirect = (data) => (dispatch) => (
  dispatch(logIn(data))
    .then(() => Router.push(addExtraInfo))
    .catch(() => {})
);

export const getCurrentUserInfo = () => ({
  type: CURRENT_USER_GET_INFO,
  payload: {
    request: fetchCurrentUser()
  }
});

export const logIn = (data) => (dispatch) => (
  dispatch(getAuthCredentials(data))
    .then(() => dispatch(getCurrentUserInfo()))
    .then(() => Router.push(homePage))
    .catch(() => {})
);

export const signUpAndLogIn = (data) => (dispatch) => (
  dispatch(signUp(data))
    .then(() => dispatch(
      logIn({
        email: data.email,
        password: data.password
      })
    ))
    .catch(() => {})
);
