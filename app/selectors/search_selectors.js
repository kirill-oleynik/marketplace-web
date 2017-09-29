import { createSelector } from 'reselect';

import { getById as getCategoriesById } from './categories_selectors';
import { getById as getApplicationsById } from './applications_selectors';

export const getCategoryIds = (state) => state.search.categoryIds;
export const getApplicationIds = (state) => state.search.applicationIds;

export const getCategories = createSelector(
  getCategoryIds, getCategoriesById,
  (ids, byId) => ids.map((id) => byId[id])
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

export const getApplications = createSelector(
  getApplicationIds, getApplicationsById,
  (ids, byId) => ids.map((id) => byId[id])
);
