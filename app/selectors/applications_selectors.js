import { createSelector } from 'reselect';

export const getIds = (state) => Array.from(state.applications.ids);
export const getById = (state) => state.applications.byId;

export const getApplications = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);
