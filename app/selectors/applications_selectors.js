import { createSelector } from 'reselect';
import { getCurrentUser } from './current_user_selectors';

export const getIds = (state) => Array.from(state.applications.ids);
export const getById = (state) => state.applications.byId;

export const getApplications = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getAppProfile = (state) => state.applications.appProfile;

export const getCanToggleFavorite = createSelector(
  getAppProfile,
  getCurrentUser,
  (application, currentUser) => (
    (currentUser.id && !application.inProgress) || false
  )
);

export const getAppProfileId = (state) => getAppProfile(state).id;
