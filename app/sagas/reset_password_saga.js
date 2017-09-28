import Router from 'next/router';
import { put, call, takeEvery } from 'redux-saga/effects';
import { callApi } from '../effects';
import { home, signIn } from '../routes';
import { getResponseData, getResponseError } from '../helpers/response_helpers';
import { resetPasswordRequest, resetPasswordConfirm } from '../services/api';
import {
  REQUEST, SUCCESS, FAILURE,
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_CONFIRM
} from '../constants';

export function* performResetPasswordRequest(action) {
  const { data } = action.payload;

  yield put({ type: RESET_PASSWORD_REQUEST + REQUEST });

  try {
    const resetPasswordResponse = yield callApi(resetPasswordRequest, { data });

    yield put({
      type: RESET_PASSWORD_REQUEST + SUCCESS,
      payload: {
        resetPassword: getResponseData(resetPasswordResponse)
      }
    });

    yield call([Router, 'push'], home);
  } catch (exception) {
    yield put({
      type: RESET_PASSWORD_REQUEST + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* performResetPasswordConfirm(action) {
  const { data } = action.payload;

  yield put({ type: RESET_PASSWORD_CONFIRM + REQUEST });

  try {
    const resetPasswordResponse = yield callApi(resetPasswordConfirm, { data });

    yield put({
      type: RESET_PASSWORD_CONFIRM + SUCCESS,
      payload: {
        resetPassword: getResponseData(resetPasswordResponse)
      }
    });

    yield call([Router, 'push'], signIn);
  } catch (exception) {
    yield put({
      type: RESET_PASSWORD_CONFIRM + FAILURE,
      payload: getResponseError(exception)
    });
  }
}

export function* watchResetPasswordRequest() {
  yield takeEvery(RESET_PASSWORD_REQUEST, performResetPasswordRequest);
}

export function* watchResetPasswordConfirm() {
  yield takeEvery(RESET_PASSWORD_CONFIRM, performResetPasswordConfirm);
}
