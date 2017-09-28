import {
  RESET_PASSWORD_REQUEST
} from '../constants';

export const resetPasswordRequest = (data) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: { data }
});
