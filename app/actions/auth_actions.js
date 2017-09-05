import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_FETCH_USER } from '../constants';

export const signUp = (data) => ({
  type: AUTH_SIGN_UP,
  payload: { data }
});

export const signIn = (data) => ({
  type: AUTH_SIGN_IN,
  payload: { data }
});

export const fetchUser = () => ({
  type: AUTH_FETCH_USER
});
