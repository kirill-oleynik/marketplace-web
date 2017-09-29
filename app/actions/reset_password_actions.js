import {
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} from '../constants';

export const resetPasswordRequest = (data) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: { data }
});

export const resetPasswordConfirm = (data) => ({
  type: RESET_PASSWORD_CONFIRM,
  payload: { data }
});
