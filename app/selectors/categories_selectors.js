import { createSelector } from 'reselect';
import compact from 'lodash/compact';
import map from 'lodash/map';
import {
  getById as getApplicationsById, getAppProfileId
} from './applications_selectors';

export const getIds = (state) => state.categories.ids;
export const getById = (state) => state.categories.byId;
export const getCurrent = (state) => state.categories.current;
export const getRelatedIds = (state) => {
  const { appProfile: { categoriesIds } } = state.applications;
  return categoriesIds || [];
};

const categoriesGetter = (idsGetter) => createSelector(
  idsGetter, getById, (ids, byId) => ids.map((id) => byId[id])
);

export const getCategories = categoriesGetter(getIds);
export const getRelatedCategories = categoriesGetter(getRelatedIds);

export const getRelatedCategoriesWithApplications = createSelector(
  getAppProfileId, getRelatedCategories, getApplicationsById,
  (appProfileId, categories, applications) => categories.map((category) => ({
    ...category,
    applications: compact(map(category.applications, (applicationId) => (
      appProfileId !== applicationId ? applications[applicationId] : null
    )))
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
