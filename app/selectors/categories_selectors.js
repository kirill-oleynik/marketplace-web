import { createSelector } from 'reselect';
import { getById as getApplicationsById } from './applications_selectors';

export const getIds = (state) => state.categories.ids;
export const getById = (state) => state.categories.byId;
export const getCurrent = (state) => state.categories.current;

export const getCategories = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getCategoriesWithApplications = createSelector(
  getCategories, getApplicationsById,
  (categories, applications) => categories.map((category) => ({
    ...category,
    applications: category.applications.map((applicationId) => (
      applications[applicationId]
    ))
  }))
);
