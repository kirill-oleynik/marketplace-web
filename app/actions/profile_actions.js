import { PROFILE_CREATE } from '../constants';

export const createProfile = (data) => ({
  type: PROFILE_CREATE,
  payload: { data }
});
