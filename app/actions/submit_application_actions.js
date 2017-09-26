import {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_MODAL_TOGGLE
} from '../constants';

export const submitApplication = (data) => ({
  type: SUBMIT_APPLICATION,
  payload: { data }
});

export const toggleSubmitApplicationModal = (modalState) => ({
  type: SUBMIT_APPLICATION_MODAL_TOGGLE,
  payload: { modalState }
});
