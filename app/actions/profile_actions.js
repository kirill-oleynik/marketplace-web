import {
  PROFILE_CREATE, PROFILE_MODAL_TOGGLE, PROFILE_UPDATE
} from '../constants';

export const createProfile = (data) => ({
  type: PROFILE_CREATE,
  payload: { data }
});

export const updateProfile = (id, data) => ({
  type: PROFILE_UPDATE,
  payload: { id, data }
});

export const toggleProfileModal = (modalState) => ({
  type: PROFILE_MODAL_TOGGLE,
  payload: { modalState }
});
