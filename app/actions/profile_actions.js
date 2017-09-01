import Router from 'next/router';
import { createProfile } from '../services/api';
import { homePage } from '../routes';
import {
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_FAILURE
} from '../constants/profile_constants';

export const create = (data) => (dispatch) => {
  dispatch({ type: PROFILE_CREATE_REQUEST });

  createProfile(data)
    .then((response) => dispatch({
      type: PROFILE_CREATE_SUCCESS,
      payload: {
        data: response.data
      }
    }))
    .then(() => Router.replace(homePage))
    .catch((err) => dispatch({
      type: PROFILE_CREATE_FAILURE,
      payload: {
        error: err.response.data.error
      }
    }));
};