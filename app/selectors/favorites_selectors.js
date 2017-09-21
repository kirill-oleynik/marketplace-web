import { createSelector } from 'reselect';
import { getById as getApplicationsById } from './applications_selectors';

export const getIds = (state) => state.favorites.ids;
export const getById = (state) => state.favorites.byId;

export const getFavorites = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getFavoritesWithApplications = createSelector(
  getFavorites, getApplicationsById,
  (favorites, applications) => favorites.map((favorite) => ({
    ...favorite,
    application: applications[favorite.application_id]
  }))
);
