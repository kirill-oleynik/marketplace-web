import { createSelector } from 'reselect';

export const getIds = (state) => state.categories.ids;
export const getById = (state) => state.categories.byId;
export const getCurrent = (state) => state.categories.current;

export const getCategories = createSelector(
  getIds, getById, (ids, byId) => ids.map((id) => byId[id])
);
