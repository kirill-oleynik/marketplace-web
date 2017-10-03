import { createSelector } from 'reselect';

export const getIds = (state) => Array.from(state.applications.ids);
export const getById = (state) => state.applications.byId;

export const getApplications = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getAppProfile = (state) => state.applications.appProfile;

export const getCanToggleFavorite = createSelector(
  getAppProfile,
  (application) => !application.inProgress
);

export const getAppRating = (state) => state.applications.appRating;

export const getAppProfileId = (state) => getAppProfile(state).id;
