import { createSelector } from 'reselect';
import { getById as getApplicationsById } from './applications_selectors';

export const getIds = (state) => state.categories.ids;
export const getById = (state) => state.categories.byId;
export const getCurrent = (state) => state.categories.current;
export const getRelatedIds = (state) => {
  const { appProfile: { categoriesIds } } = state.applications;
  return categoriesIds || [];
};

export const getCategories = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getRelatedCategories = createSelector(
  getRelatedIds, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getRelatedCategoriesWithApplications = createSelector(
  getRelatedCategories, getApplicationsById,
  (categories, applications) => categories.map((category) => ({
    ...category,
    applications: category.applications.map((applicationId) => (
      applications[applicationId]
    ))
  }))
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
