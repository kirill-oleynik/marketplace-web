import {
  AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_FETCH_USER
} from '../constants';

export const signUp = (data) => ({
  type: AUTH_SIGN_UP,
  payload: { data }
});

export const signIn = (data) => ({
  type: AUTH_SIGN_IN,
  payload: { data }
});

export const signOut = () => ({
  type: AUTH_SIGN_OUT
});

export const fetchUser = () => ({
  type: AUTH_FETCH_USER
});
